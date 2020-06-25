import React, { useState } from 'react';
import './App.css';
import { Sidebar, Discover, List, MyList } from './components'

const alias = 'MAA_Movie-';

function App() {

  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className={`${alias}wrapper`}>
      <Sidebar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {currentTab === 0 && <Discover/>}
      {currentTab === 1 && <List/>}
      {currentTab === 2 && <MyList/>}
    </div>
  );
}

export default App;