import React from "react";
import { Collapse, Result } from "antd";

const Results = ({ searchResults }) => {
  console.log("Results -> searchResults", searchResults.data.included);
const { Panel } = Collapse;

  const results = searchResults.data.included.map(({ id, attributes }) => {
    const job = attributes;
    return (
      <Panel header={`${job.company.name}: ${job.title} (${job.location.city})`} key={id}>
        <img style={{ float: "right" }} src={job.company.logo} alt={job.company.name} />
        {job.location.city}
        <br />
        <h3>Description</h3>
        {job.previewText}
        <br />
        <h3>Benefits</h3>
        {job.benefits}
        <br />
        {job.closingText}
      </Panel>
    );
  });
  return (
    <div>
      <h2>Results</h2>
      <Collapse accordion>{results}</Collapse>
    </div>
  );
};
/* benefits, closingText, introduction, location {city}, previewText,
qualifications[{title}], relativeDetailUrl,  */

export default Results;
