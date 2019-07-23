import React from "react";
import { Button } from "antd";
import ArtistItem from "./ArtistItem";

const ArtistList = ({ list }) => (
  <div className="list-view">
    <div className="list-header">
      <h1>Artists</h1>
      <div className="list-header-buttons">
        <Button type="link" icon="caret-left" />
        <Button type="link" icon="caret-right" />
      </div>
    </div>
    {list.items.map((a, i) => (
      <ArtistItem item={a} key={a.id} />
    ))}
    {list.items.length === 0 ? (
      <div className="no-results">No results found</div>
    ) : (
      ""
    )}
  </div>
);

export default ArtistList;
