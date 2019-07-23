import React from "react";
import Search from "./Search";
import ArtistList from "./ArtistList";
import TrackList from "./TrackList";
import Api from "../utils/api";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      artists: [],
      tracks: [],
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
          <ArtistList />
          <TrackList />
        </div>
      </>
    );
  }
}

export default App;
