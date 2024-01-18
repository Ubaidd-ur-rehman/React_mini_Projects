import React, { Component } from 'react';
import './App.css';
import text from './data'; // Adjust the path based on your project structure
import Output from './Output';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paras: 0,
      html: true,
      text: '', // Join paragraphs with newline for display
    };
  }

  handleParasChange = (event) => {
    const newParas = parseInt(event.target.value, 10) || 0;
    this.setState({
      paras: newParas,
      text: text.slice(0, newParas).join('\n'),
    });
  };

  handleHtmlChange = (event) => {
    const newHtml = event.target.value === 'yes';
    this.setState({
      html: newHtml,
    });
   
  };

  render() {
    return (
      <div className='container'>
        <h1>ReactJS sample text generator</h1>
        <div className='input-field'>
          <div className='number'>
            <p>Paragraphs:</p>
            <input
              type='number'
              value={this.state.paras}
              onChange={this.handleParasChange}
            />
          </div>
          <div className='YesNo'>
            <p>Include HTML:</p>
            <select
              id="yesNoDropdown"
              name="yesNo"
              value={this.state.html ? 'yes' : 'no'}
              onChange={this.handleHtmlChange}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
       <Output value={this.state.text} />
      </div>
    );
  }
}

export default App;
