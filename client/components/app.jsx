import React from "react";
import { Router } from "@reach/router";
import SearchList from "./SearchList";
import ArtistDetail from "./ArtistDetail";
import Api from "../utils/api";

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

  render() {
    return (
      <>
        <div id="background" />
        <Router>
          <SearchList
            onSearch={this.onSearch}
            onPagination={this.onPagination}
            selectArtist={this.selectArtist}
            artists={this.state.artists}
            tracks={this.state.tracks}
            path="/"
          />
          <ArtistDetail
            path="/artist"
            artist={this.state.selectedArtist}
            onPagination={this.onPagination}
          />
        </Router>
      </>
    );
  }
}

export default App;
