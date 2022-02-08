function Brag({ description, created, supportingLink }) {
  let tzName = Intl.DateTimeFormat().resolvedOptions().timeZone;
  let time = Intl.DateTimeFormat("en", {
    hour: "numeric",
    minute: "numeric",
  }).format(new Date(created));
  let date = new Date(created).toLocaleDateString();
  let imgSrc = "https://placekitten.com/320/240?random=" + Math.random();
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

export default Brag;
