import React, { useState } from "react";
import axios from "axios";
import { Button, Skeleton } from "antd";
import Results from "./Results/Results";
import SearchField from "./SearchField/SearchField";

axios.defaults.baseURL =
  process.env.REACT_APP_API_URI || "https://staging-api.joblocal.de/v4/search-jobs/";

const Search = () => {
  const [{ input }, setInput] = useState({ input: "" });
  const [{ searchResults }, setSearchResults] = useState({ searchResults: null });
  const [{ isLoading }, setIsLoading] = useState({ isLoading: false });

  const resultsHandler = (data) => {
    setSearchResults({ searchResults: data });
  };

  const submitQuery = async () => {
    if (input !== "") {
      setIsLoading({ isLoading: true });
      try {
        const data = await axios.get(`?search.query=${input}`);

        resultsHandler(data);
      } catch (error) {
        resultsHandler(null);
      }
      setIsLoading({ isLoading: false });
    }
  };

  return (
    <div>
      <SearchField setInput={setInput} input={input} submitQuery={submitQuery} />
      <Button onClick={submitQuery}>Search</Button>
      <div style={{ marginTop: "20px" }}>
        {isLoading ? (
          <>
            <h2>Looking for your dream job...</h2>
            <Skeleton paragraph={{ rows: 10 }} active />
          </>
        ) : (
          searchResults !== null && <Results searchResults={searchResults} search={input} />
        )}
      </div>
    </div>
  );
};

export default Search;
