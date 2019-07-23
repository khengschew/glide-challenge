import React from "react";
import { Input } from "antd";
import "antd/dist/antd.css";

const SearchField = Input.Search;

const Search = ({ onSearch }) => (
  <div id="search">
    <SearchField
      placeholder="Search for artist or track"
      onSearch={onSearch}
      size="large"
      id="search-field"
      style={{
        width: "80%",
        margin: "40px",
      }}
      enterButton
    />
  </div>
);

export default Search;
