import React from "react";
import { Input } from "antd";

const SearchField = ({ input, setInput, submitQuery }) => {
  const onChangeHandler = (event) => {
    setInput({ input: event.target.value });
  };

  const onKeyDownHandler = ({ key }) => {
    if (key === "Enter") {
      submitQuery();
    }
  };

  return (
    <Input
      placeholder="Search job"
      style={{ width: "200px" }}
      value={input}
      onChange={onChangeHandler}
      onKeyDown={onKeyDownHandler}
    />
  );
};

export default SearchField;
