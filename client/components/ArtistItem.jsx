import React from "react";

const ArtistItem = ({ item, selectArtist }) => {
  const image =
    item.images && item.images.length
      ? item.images[0].url
      : "https://developer.spotify.com/assets/branding-guidelines/icon3@2x.png";

  return (
    <div className="list-item artist-item" onClick={() => selectArtist(item)}>
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
  );
};

export default ArtistItem;
