import React from "react";
import Search from "./Search";
import ArtistList from "./ArtistList";
import TrackList from "./TrackList";
import Api from "../utils/api";
import ArtistDetail from "./ArtistDetail";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      artists: null,
      tracks: null,
      selectedArtist: null,
    };

    this.onSearch = this.onSearch.bind(this);
    this.onPagination = this.onPagination.bind(this);
    this.selectArtist = this.selectArtist.bind(this);
    this.unselectArtist = this.unselectArtist.bind(this);
  }

  onSearch(query) {
    Api.searchSpotify(query).then((response) => {
      this.setState(response);
    });
  }

  onPagination(url) {
    Api.spotifyRequest(url).then((response) => {
      this.setState(response);
    });
  }

  selectArtist(artist) {
    this.setState({ selectedArtist: artist });
  }

  unselectArtist() {
    this.setState({ selectedArtist: null });
  }

  render() {
    return (
      <>
        <div id="background" />
        <Search onSearch={this.onSearch} />
        <div id="content-list">
          {this.state.artists ? (
            <ArtistList
              list={this.state.artists}
              pageChange={this.onPagination}
              prev={this.state.artists.previous}
              next={this.state.artists.next}
              selectArtist={this.selectArtist}
            />
          ) : (
            ""
          )}
          {this.state.tracks ? (
            <TrackList
              list={this.state.tracks}
              pageChange={this.onPagination}
              prev={this.state.tracks.previous}
              next={this.state.tracks.next}
            />
          ) : (
            ""
          )}
        </div>
        {this.state.selectedArtist ? (
          <ArtistDetail
            visible={!!this.state.selectedArtist}
            title={this.state.selectedArtist.name}
            onCancel={this.unselectArtist}
          />
        ) : (
          ""
        )}
      </>
    );
  }
}

export default App;
