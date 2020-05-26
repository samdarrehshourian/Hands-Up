import React from 'react';
import MenuBar from './components/MenuBar'; 
import Header from './components/Header';
import './scss-style/App.scss'; 


function App() {
  return (
    <div className="App">
      <Header/>
      <MenuBar/>
    </div>
  );
}

export default App;
