import React from "react";
import TrackItem from "./TrackItem";

const TrackList = ({ list }) => (
  <div className="list-view">
    <h1>Tracks</h1>
    {list.items.map((a, i) => (
      <TrackItem item={a} key={a.id} />
    ))}
    {list.items.length === 0 ? (
      <div className="no-results">No results found</div>
    ) : (
      ""
    )}
  </div>
);

export default TrackList;
