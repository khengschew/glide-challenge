import React from "react";
import Search from "./Search";
import ArtistList from "./ArtistList";
import TrackList from "./TrackList";
import Api from "../utils/api";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      artists: {},
      tracks: {},
    };

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(query) {
    Api.searchSpotify(query).then((response) => {
      this.setState(response);
    });
  }

  render() {
    return (
      <>
        <Search onSearch={this.onSearch} />
        <div id="content-list">
          {this.state.artists.items && this.state.artists.items.length ? (
            <ArtistList list={this.state.artists} />
          ) : (
            ""
          )}
          {this.state.tracks.items && this.state.tracks.items.length ? (
            <TrackList list={this.state.tracks} />
          ) : (
            ""
          )}
        </div>
      </>
    );
  }
}

export default App;
