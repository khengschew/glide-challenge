import React from "react";
import { Button } from "antd";
import TrackItem from "./TrackItem";

const TrackList = ({ list, pageChange, prev, next }) => (
  <div className="list-view">
    <div className="list-header">
      <h1>Tracks</h1>
      <div className="list-header-buttons">
        <Button
          type="link"
          icon="caret-left"
          onClick={() => {
            pageChange(prev);
          }}
          disabled={!prev}
        />
        <Button
          type="link"
          icon="caret-right"
          onClick={() => {
            pageChange(next);
          }}
          disabled={!next}
        />
      </div>
    </div>
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
