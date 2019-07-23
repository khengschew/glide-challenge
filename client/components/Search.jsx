import React from "react";
import { Input } from "antd";
import Api from "../utils/api";
import "antd/dist/antd.css";

const SearchField = Input.Search;

const Search = (props) => (
  <div id="search">
    <SearchField
      placeholder="Search for artist or track"
      onSearch={(value) =>
        Api.searchSpotify(value).then((response) => console.log(response))
      }
      size="large"
      id="search-field"
      style={{
        width: "80%",
        margin: "10px",
      }}
      enterButton
    />
  </div>
);

export default Search;
