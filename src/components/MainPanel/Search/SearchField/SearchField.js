import React from "react";

const SearchField = ({ input, setInput, submitQuery }) => {
  const onChangeHandler = (event) => {
    setInput({ input: event.target.value });
  };

  const onKeyDownHandler = ({ key }) => {
    if (key === "Enter") {
      submitQuery();
    }
  };

  return <input value={input} onChange={onChangeHandler} onKeyDown={onKeyDownHandler} />;
};

export default SearchField;
