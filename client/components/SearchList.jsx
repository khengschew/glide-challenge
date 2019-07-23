import React from "react";
import Search from "./Search";
import ArtistList from "./ArtistList";
import TrackList from "./TrackList";

const SearchList = ({
  onSearch,
  onPagination,
  selectArtist,
  artists,
  tracks,
}) => (
  <>
    <Search onSearch={onSearch} />
    <div id="content-list">
      {artists ? (
        <ArtistList
          list={artists}
          pageChange={onPagination}
          selectArtist={selectArtist}
        />
      ) : (
        ""
      )}
      {tracks ? <TrackList list={tracks} pageChange={onPagination} /> : ""}
    </div>
  </>
);

export default SearchList;
