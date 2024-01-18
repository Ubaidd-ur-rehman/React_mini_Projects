import React, { Component } from 'react'
import Spinner from '../layout/Spinner'
import { Consumer } from '../../context'
import Track from './Track';
export default class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {({ track_list, heading }) => {
          if (!track_list || track_list.length === 0) {
            return <Spinner />;
          } else {
            return (
              <React.Fragment>
                <h3 className='text-center mb-4'>{heading}</h3>
                <div className='row'>
                  {track_list.map(item => (
                    <Track key={item.track.artist_id} track={item.track} />
                  ))}
                </div>
              </React.Fragment>
            );
          }
        }}
      </Consumer>
    );
  }
}