import React from "react";
import { Collapse, Result } from "antd";

const { Panel } = Collapse;

const Results = ({ searchResults, search }) => {
  if (!searchResults.data.included)
    return (
      <Result
        status="404"
        title="No jobs around!"
        subTitle={`Sorry, we couldn't find you any jobs under ${search}`}
      />
    );

  const results = searchResults.data.included.map(({ id, attributes }) => {
    const job = attributes;
    console.log("benefits", job);
    return (
      <Panel
        header={`${job.company.name}: ${job.title} / ${job.workingTimes[0].title} (${job.location.city})`}
        key={id}>
        <img style={{ float: "right" }} src={job.company.logo} alt={job.company.name} />
        <p>{job.location.city}</p>
        <br />
        <h3>{`${job.company.name}: ${job.title}`}</h3>
        <p>{job.previewText}</p>
        <br />
        {job.requirements !== "" && (
          <>
            <h3>Anforderungen</h3>
            <p>{job.requirements}</p>
          </>
        )}
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
