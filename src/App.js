import React, { Component } from 'react';
import './App.css';
const marked = require('marked')

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      markup: 'Heading\n=======\n\nSub-heading\n-----------\n' +
      '\n### Another deeper heading\n \nParagraphs are separated by a blank line.' +
      '\n\nLeave 2 spaces at the end of a line to do a line break.\n\nText attributes:  \n' +
      ' *italic*, **bold**, `monospace`, ~~strikethrough~~\n\n' +
      '> Block quotes are  \n> written like this.\n>\n> They can span multiple lines, \n> too.' +
      '\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n' +
      '  2. oranges\n  3. pears\n\nThe rain---not the reign---in Spain.\n\n' +
      '*[Kris Koishigawa](https://www.freecodecamp.org/scissorsneedfoodtoo)*',
    }

    // for testing
    // console.log(marked(this.state.textarea));
    this.handleChange = this.handleChange.bind(this);
  } // end Constructor

  handleChange(event) {
    const updatedTextarea = event.target.value

    this.setState({
      markup: updatedTextarea,
    });
  }

  renderHTML() {
    const rawMarkup = marked(this.state.markup, {sanitized: true})

    return {__html: rawMarkup}
  }

  render() {
    return (
      <div className="App container">
        <div className="col">
          <div className="col-sm-6">
            <textarea className="form-control" rows="22" value={this.state.markup} onChange={this.handleChange}/>
          </div>
          <div className="col-sm-6">
            <div className="output" dangerouslySetInnerHTML={this.renderHTML()} />
          </div>
        </div>
      </div> // end App
    );
  }
}

export default App;
