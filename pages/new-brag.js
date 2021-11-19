import Layout from "../components/layout";
import Head from "next/head";
import { useState } from "react";
import Airtable from "airtable";

const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID);

const username = "Nikema Prophet";

export default function NewBragForm() {
  const [description, setDescription] = useState("");
  const [supportingLink, setSupportingLink] = useState("");
  const [success, setSuccess] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // create the record in Airtable
    base(process.env.AIRTABLE_TABLE_NAME).create(
      [
        {
          fields: {
            Description: description,
            "Supporting Link": supportingLink,
            Name: username,
          },
        },
      ],
      function (err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record) {
          console.log(record.getId());
        });
        setSuccess(true);
      }
    );

    // clear the form fields
    setDescription("");
    setSupportingLink("");
  }

  return (
    <Layout>
      <Head>
        <title>Enter a new brag</title>
      </Head>

      <form className="flex flex-col  w-5/6">
        {success && (
          <div className="alert alert-success">
            <div className="flex-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-6 h-6 mx-2 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                ></path>
              </svg>
              <label>New brag added successfully!</label>
            </div>
          </div>
        )}
        <div className="form-control">
          <label htmlFor="description" className="label mx-2 ">
            <span className="label-text">Describe the new brag</span>
          </label>
          <textarea
            className="textarea h-24 p-4 m-2 textarea-bordered"
            value={description}
            placeholder="This is the awesome thing I just did"
            id="description"
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="supporting link" className="mx-2 label">
            <span className="label-text">Supporting Link</span>
          </label>
          <input
            id="link"
            value={supportingLink}
            type="url"
            placeholder="https://google.com"
            onChange={(e) => setSupportingLink(e.target.value)}
            className="input input-bordered m-2  p-4"
          />
        </div>

        <button
          className="btn btn-primary self-center flex-none m-2 w-auto p-4 "
          type="submit"
          onClick={handleSubmit}
        >
          Enter my brag
        </button>
      </form>
    </Layout>
  );
}
