import React, { useState } from "react";
import babyNamesData from './babyNamesData.json';
import Favorites from "./Favorites";
import GenderButtons from "./GenderButtons";

const BabyNames = () => {
  // Gender BTN
  const [femaleGender, setFemaleGender] = useState(false); // Track female gender button state
  const [maleGender, setMaleGender] = useState(false);

  // Search Input
  const [search, setSearch] = useState("");

  // Filter Names
  const [filteredItems, setFilteredItems] = useState(babyNamesData);

  const handleSearchChange = (e) => {
    const searchValue = e.target.value;
    setSearch(searchValue);

    let filteredItems = babyNamesData.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    if (femaleGender) {
      filteredItems = filteredItems.filter((item) => item.sex === "f");
    } else if (maleGender) {
      filteredItems = filteredItems.filter((item) => item.sex === "m");
    }

    setFilteredItems(filteredItems);
  };

  // Add/Remove Favorites
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (name) => {
    setFavorites((prevFavorites) => [...prevFavorites, name]);
    setFilteredItems((prevFilteredItems) =>
      prevFilteredItems.filter((item) => item.name !== name)
    );
  };

  const removeFromFavorites = (name) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((favorite) => favorite !== name)
    );
  };

  const handleFemaleButtonClick = () => {
    setFemaleGender(!femaleGender); // Toggle the female gender button state

    let filteredItems = babyNamesData.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    if (!femaleGender) {
      filteredItems = filteredItems.filter((item) => item.sex === "f");
    }

    setFilteredItems(filteredItems);
  };

  const handleMaleButtonClick = () => {
    setMaleGender(!maleGender); // Toggle the male gender button state

    let filteredItems = babyNamesData.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    if (!maleGender) {
      filteredItems = filteredItems.filter((item) => item.sex === "m");
    }

    setFilteredItems(filteredItems);
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
      <div className="gender-btn">
        <GenderButtons
          femaleGender={femaleGender}
          onFemaleClick={handleFemaleButtonClick}
          maleGender={maleGender}
          onMaleClick={handleMaleButtonClick}
        />
      </div>
      <div className="favorites">
        <Favorites
          favorites={favorites}
          removeFromFavorites={removeFromFavorites}
          addToFavorites={addToFavorites}
        />
      </div>
      <div className="names">
        {filteredItems.map((item) => (
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
