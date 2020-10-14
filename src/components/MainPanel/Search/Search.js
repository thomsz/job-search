import React, { useState } from "react";
import { Button } from "antd";
import SearchField from "./SearchField/SearchField";

const Search = () => {
  const [{ input }, setInput] = useState({ input: "" });

  const submitQuery = () => {
    if (input !== "") {
      console.log("Submitted", input);
    }
  };

  return (
    <div>
      <SearchField setInput={setInput} input={input} submitQuery={submitQuery} />
      <Button onClick={submitQuery}>Search</Button>
    </div>
  );
};

export default Search;
