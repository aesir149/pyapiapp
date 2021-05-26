import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function App() {
  'use strict';

  const JSON_STRINGIFY_INDENT = 2;
  const e = React.createElement;

  class EventCaller extends React.Component {
    constructor(props) {
      super(props);
      this.state = { eventBody: '' };
  }

  componentDidMount() {
    this.GetEvent();
  }

  GetEvent() {
      fetch(this.props.endpoint)
      .then(response => {
        return response.json();
      })
      .then(responseBody => {
          this.setState({ eventBody: JSON.stringify(responseBody, null, JSON_STRINGIFY_INDENT)});
      });
  }

  render() {
    let eventBody = this.state.eventBody;
    return (
      <div id="event-body-text">
        <h2>Event Body Will Be Output Below</h2>
        <pre>
          { eventBody }
        </pre>
      </div>
    );
  }
}

var endpoint_url = document.getElementById('endpoint_url').innerHTML.trim();


  return (
    <div className="p#endpoint_url">

     <script src="https://unpkg.com/react@^16/umd/react.production.min.js" crossorigin></script>
     <script src="https://unpkg.com/react-dom@^16/umd/react-dom.production.min.js" crossorigin></script>
     <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
     <EventCaller endpoint={endpoint_url}/>
    
    </div>
  );
}

export default App;
