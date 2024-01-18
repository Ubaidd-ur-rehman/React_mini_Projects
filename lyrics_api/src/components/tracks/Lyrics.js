import React, { Component } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams hook
const Lyrics = () => {
    const { id } = useParams();
  
    const [track, setTrack] = React.useState({});
    const [lyrics, setLyrics] = React.useState({});
    const [error, setError] = React.useState(null);
  
    React.useEffect(() => {
      if (id) {
        axios
          .get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=${process.env.REACT_APP_Api_Key}`)
          .then((res) => {
            console.log(res.data);
            setLyrics(res.data.message.body.lyrics);
  
            return axios
              .get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${id}&apikey=${process.env.REACT_APP_Api_Key}`)
              .then((res) => {
                setTrack(res.data.message.body.track);
              })
              .catch((err) => {
                setError(err.response?.data || 'Unknown error occurred');
                console.error(err);
              });
          })
          .catch((err) => {
            setError(err.response?.data || 'Unknown error occurred');
            console.error(err);
          });
      } else {
        setError('No id found in params');
        console.error('No id found in params');
      }
    }, [id]);
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    return <div>{/* Render your component content here */}</div>;
  };
  
  export default Lyrics;
  