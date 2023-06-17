import React from 'react';
import './App.css';
import babyNamesData from './babyNamesData.json';
import BabyNames from './BabyNames'
import SearchBar from './SearchBar';


function App() {
  return (
    <div className="App">
      <SearchBar />
      <BabyNames babyNamesData={babyNamesData}/>

    </div>
  );
}

export default App;
