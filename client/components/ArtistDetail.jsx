import React, { useState, useEffect } from "react";
import { Button } from "antd";
import Api from "../utils/api";
import TrackList from "./TrackList";

const ArtistDetail = ({ artist, onPagination }) => {
  const [tracks, setTracks] = useState(null);

  useEffect(() => {
    Api.spotifyRequest(`${artist.href}/top-tracks?country=US`).then((list) =>
      setTracks({ items: list.tracks })
    );
  }, []);

  const image = artist.images.length
    ? artist.images[0].url
    : "https://developer.spotify.com/assets/branding-guidelines/icon3@2x.png";

  return (
    <>
      <div className="detail-header">
        <h1>{artist.name}</h1>
        <Button />
      </div>
      <div className="detail-sidebar">
        <div
          className="sidebar-image"
          style={{
            backgroundImage: `url("${image}")`,
          }}
        />
        <div className="sidebar-info">
          <div className="sidebar-info-title">Followers</div>
          <div className="sidebar-info-content">{artist.followers.total}</div>
          <div className="sidebar-info-title">Popularity</div>
          <div className="sidebar-info-content">{artist.popularity}</div>
          <div className="sidebar-info-title">Genres</div>
          <div className="sidebar-info-content">
            {artist.genres.length
              ? artist.genres.map((g) => <p key={g}>{g}</p>)
              : "none"}
          </div>
        </div>
      </div>
      {tracks && <TrackList list={tracks} pageChange={onPagination} />}
    </>
  );
};

export default ArtistDetail;
