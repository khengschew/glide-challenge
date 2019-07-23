import React from "react";
import ArtistItem from "./ArtistItem";

const TrackList = ({ list }) => (
  <div className="list-view">
    <h1>Tracks</h1>
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

export default TrackList;
