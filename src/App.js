import React, { useState } from 'react';
import './App.css';
import { Sidebar, Discover, List, MyList } from './components'

function App() {
  return (
    <React.Fragment>
      <Sidebar />
      <Discover />
      <List />
      <MyList />
    </React.Fragment>

  );
}

export default App;
