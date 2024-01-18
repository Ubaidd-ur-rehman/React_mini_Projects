import React, { Component } from 'react';
import axios from 'axios';

export class Images extends Component {
  state = {
    images: [],
    count: 30,
    start: 1
  };

  componentDidMount() {
    const { count, start } = this.state;
    axios.get(`/api/photos?count=${count}&start=${start}`)
      .then((res) => {this.setState({ images: res.data })})
      .catch(error => console.error('Error fetching images:', error));
  }

  render() {
    console.log(this.state);
    return (
      <div> 
       hello
      </div>
    );
  }
}

export default Images;
