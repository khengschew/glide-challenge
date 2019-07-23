import React from "react";
import Search from "./Search";
import ArtistList from "./ArtistList";
import TrackList from "./TrackList";
import Api from "../utils/api";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      artists: null,
      tracks: null,
    };

    this.onSearch = this.onSearch.bind(this);
    this.onPagination = this.onPagination.bind(this);
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
      </>
    );
  }
}

export default App;
