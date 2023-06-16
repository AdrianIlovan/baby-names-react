import React from 'react';
import './App.css';
import babyNamesData from './babyNamesData.json';
import BabyNames from './BabyNames'


function App() {
  return (
    <div className="App">
      <BabyNames babyNamesData={babyNamesData}/>
    </div>
  );
}

export default App;
