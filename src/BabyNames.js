import React, { useState } from "react";
import babyNamesData from './babyNamesData.json';
import Favorites from "./Favorites";

const BabyNames = () => {
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [filteredItems, setFilteredItems] = useState(babyNamesData);

  const handleSearchChange = (e) => {
    const searchValue = e.target.value;
    setSearch(searchValue);

    const filteredItems = babyNamesData.filter(item =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredItems(filteredItems);
  };

  const addToFavorites = (name) => {
    setFavorites(prevFavorites => [...prevFavorites, name]);
    setFilteredItems(prevFilteredItems =>
      prevFilteredItems.filter(item => item.name !== name)
    );
  };

  const removeFromFavorites = (name) => {
    setFilteredItems(prevFilteredItems => [...prevFilteredItems, { name }]);
    setFavorites(prevFavorites =>
      prevFavorites.filter(favorite => favorite !== name)
    );
  };

  return (
    <div className="container">
      <input
        className="search-bar"
        type="text"
        placeholder="Search for a Name:"
        value={search}
        onChange={handleSearchChange}
      />
      <div className="favorites">
        <Favorites favorites={favorites} removeFromFavorites={removeFromFavorites} addToFavorites={addToFavorites} />
      </div>
      <div className="names">
        {filteredItems.map(item => (
          <div
            className={item.sex === "m" ? "male-names" : "female-names"}
            key={item.id}
            onClick={() => addToFavorites(item.name)}
          >
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BabyNames;