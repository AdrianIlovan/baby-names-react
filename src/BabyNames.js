import React, { useState } from "react";
import babyNamesData from './babyNamesData.json';

const BabyNames = () => {
    const [search, setSearch] = useState("");
  
    const filteredItems = babyNamesData.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  
    return (
      <div className="container">
        <input
          className="search-bar"
          type="text"
          placeholder="Search for a Name:"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <div className="names">
          {filteredItems.map(item => (
            <div
              className={item.sex === "m" ? "male-names" : "female-names"}
              key={item.id}
            >
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default BabyNames;
  