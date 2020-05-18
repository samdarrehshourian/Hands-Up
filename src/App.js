import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MenuBar from './components/MenuBar'

function App() {
  return (
    <div className="App">
      <MenuBar/>
    </div>
  );
}

export default App;
