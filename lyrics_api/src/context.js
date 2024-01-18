import React, { Component } from 'react';
import axios from 'axios';
// Create a context named 'Context' using React's createContext method
const Context = React.createContext();

// Define a class named 'Provider' that extends React.Component
export class Provider extends Component {
  // Constructor for the Provider class
  constructor(props) {
    // Call the constructor of the parent class (React.Component)
    super(props);

    // Initialize the state of the Provider component with a track_list and heading
    this.state = {
      track_list: [],
      heading: 'Top 10 Tracks',
      loading: true,
    };
  }

  // Lifecycle method: componentDidMount
  componentDidMount() {
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_Api_Key}`)
      .then(res => {
        // console.log(res.data)
      this.setState({track_list: res.data.message.body.track_list})
  })
      .catch(err => console.log(err));
  }
  

  // Render method of the Provider class
  render() {
    // Render the Context.Provider component, passing the current state as the value
    return (
      <Context.Provider value={this.state}>

        {/* Render the child components (passed as children to Provider) */}
        {this.props.children}
      </Context.Provider>
    );
  }
}

// Export a constant named 'Consumer' which holds the Context.Consumer component
export const Consumer = Context.Consumer;
