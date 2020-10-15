import React, { useState } from "react";
import axios from "axios";
import { Button } from "antd";
import Results from "./Results/Results";
import SearchField from "./SearchField/SearchField";

axios.defaults.baseURL =
  process.env.REACT_APP_API_URI || "https://staging-api.joblocal.de/v4/search-jobs/";

const Search = () => {
  const [{ input }, setInput] = useState({ input: "" });
  const [{ searchResults }, setSearchResults] = useState({ searchResults: null });

  const resultsHandler = (data) => {
    setSearchResults({ searchResults: data });
  };

  const submitQuery = async () => {
    if (input !== "") {
      try {
        const data = await axios.get(`?search.query=${input}`);

        resultsHandler(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <SearchField setInput={setInput} input={input} submitQuery={submitQuery} />
      <Button onClick={submitQuery}>Search</Button>
      {searchResults !== null ? <Results searchResults={searchResults} /> : null}
    </div>
  );
};

export default Search;
