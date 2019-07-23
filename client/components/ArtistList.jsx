import React from "react";
import { Button } from "antd";
import ArtistItem from "./ArtistItem";

const ArtistList = ({ list, pageChange, selectArtist }) => (
  <div className="list-view">
    <div className="list-header">
      <h1>Artists</h1>
      <div className="list-header-buttons">
        <Button
          type="link"
          icon="caret-left"
          onClick={() => {
            pageChange(list.previous);
          }}
          disabled={!list.previous}
        />
        <Button
          type="link"
          icon="caret-right"
          onClick={() => {
            pageChange(list.next);
          }}
          disabled={!list.next}
        />
      </div>
    </div>
    {list.items.map((a, i) => (
      <ArtistItem item={a} selectArtist={selectArtist} key={a.id} />
    ))}
    {list.items.length === 0 ? (
      <div className="no-results">No results found</div>
    ) : (
      ""
    )}
  </div>
);

export default ArtistList;
