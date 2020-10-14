import React from "react";

const Results = ({ searchResults }) => {
  console.log("Results -> searchResults", searchResults.data.included);

  const results = searchResults.data.included.map(({ id, attributes }) => {
    const job = attributes;
    return (
      <p key={id}>
        title:
        {job.title}
        <br />
        Company:
        {job.company.name}
        <img src={job.company.logo} alt={job.company.name} />
        <br />
      </p>
    );
  });
  return (
    <div>
      <h2>Results</h2>
      {results}
    </div>
  );
};
/* benefits, closingText, introduction, location {city}, previewText,
qualifications[{title}], relativeDetailUrl,  */

export default Results;
