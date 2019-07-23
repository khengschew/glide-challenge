import React from "react";
import { Link } from "@reach/router";

const ArtistItem = ({ item, selectArtist }) => {
  const image =
    item.images && item.images.length
      ? item.images[0].url
      : "https://developer.spotify.com/assets/branding-guidelines/icon3@2x.png";

  return (
    <Link to="/artist" onClick={() => selectArtist(item)}>
      <div className="list-item artist-item">
        <div
          style={{
            backgroundImage: `url("${image}")`,
          }}
          className={"list-item-image"}
        />
        <div className="list-item-text">
          <div className="list-title">{item.name}</div>
        </div>
        <div className="list-cta">
          <div className="artist-next">+</div>
        </div>
      </div>
    </Link>
  );
};

export default ArtistItem;
