import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Airtable from "airtable";

export async function getServerSideProps() {
  const airtable = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY,
  });

  const records = await airtable
    .base(process.env.AIRTABLE_BASE_ID)(process.env.AIRTABLE_TABLE_NAME)
    .select({
      fields: ["ID", "Description", "Supporting Link", "Created"],
      sort: [{ field: "ID", direction: "desc" }],
    })
    .all();

  const brags = records.map((brag) => {
    return {
      description: brag.get("Description"),
      id: brag.get("ID"),
      createdDate: brag.get("Created"),
      supportingLink: brag.get("Supporting Link") || "",
    };
  });
  return {
    props: {
      brags,
    },
  };
}

function Brag({ description, created, supportingLink }) {
  let tzName = Intl.DateTimeFormat().resolvedOptions().timeZone;
  let time = Intl.DateTimeFormat("en", {
    hour: "numeric",
    minute: "numeric",
  }).format(new Date(created));
  let date = new Date(created).toLocaleDateString();
  let imgSrc = "https://loremflickr.com/320/240?random=" + Math.random();
  return (
    <div className="card bordered w-full sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/4 2xl:w-1/4 mx-4 my-4">
      <figure>
        <img src={imgSrc} alt="placeholder image" />
      </figure>
      <div className="card-body">
        <p>{description}</p>

        <time className="text-xs">
          entered: {date} {time} {tzName}
        </time>
        {supportingLink && (
          <div className="justify-end card-actions">
            <a href={supportingLink} target="_blank">
              <button className="btn btn-secondary">More info</button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Home({ brags }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className=" mx-auto flex justify-center flex-wrap">
        {brags.map((brag) => (
          <Brag
            key={brag.id}
            description={brag.description}
            created={brag.createdDate}
            supportingLink={brag.supportingLink}
          />
        ))}
      </div>
    </Layout>
  );
}
