import React from 'react';
import './Track.css';

class Track extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    <div className="Track">
      <div className="Track-information" track={track}>
        <h3>{this.props.track.name}</h3>
        <p>{this.props.track.artist} | {this.props.track.album}</p>
      </div>
      <a className="Track-action">
        {renderAction() {
          if ({isRemoval}) {
            return +
          } else {
            return -
          }
        }}
      </a>
    </div>
  }
}

export default Track;
