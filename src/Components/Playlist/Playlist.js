import React from 'react';
import './Playlist.css';
// import TrackList from '../TrackList/TrackList.js';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.onNameChange = this.onNameChange.bind(this);
  }

  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
  }

  render() {
    <div className="Playlist">
      <input defaultValue={'New Playlist'} onChange={this.handleNameChange} />
      <TrackList tracks={this.props.playlistTracks} isRemoval={true} onRemove={this.props.onRemove} />
      <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
    </div>
  }
}

export default Playlist;
