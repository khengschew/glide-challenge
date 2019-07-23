import React from "react";
import { Icon } from "antd";
import Item from "antd/lib/list/Item";

const TrackItem = ({ item }) => {
  const image =
    item.album.images && item.album.images.length
      ? item.album.images[0].url
      : "https://developer.spotify.com/assets/branding-guidelines/icon3@2x.png";

  return (
    <div
      className="list-item track-item"
      onClick={() => {
        window.open(item.external_urls.spotify, "_blank");
      }}
    >
      <div
        style={{
          backgroundImage: `url("${image}")`,
        }}
        className={"list-item-image"}
      />
      <div className="list-item-text">
        <div className="list-title">{item.name}</div>
        <div className="list-subtitle">
          {item.artists.map((a) => a.name).join(" • ")}
        </div>
      </div>
      <div className="list-cta">
        <Icon type="play-circle" />
      </div>
    </div>
  );
};

export default TrackItem;
