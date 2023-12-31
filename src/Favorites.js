import React from "react";

const Favorites = ({ favorites, removeFromFavorites }) => {
  return (
    <div className="favorites">
      <h1>Favorites:</h1>
      {favorites.length > 0 ? (
        <div className="favorite-names">
          {favorites.map((name, index) => (
            <div
              key={index}
              className={index % 2 === 0 ? "male-names" : "female-names"}
              onClick={() => removeFromFavorites(name)}
            >
              <p>{name}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Click on some names below to add to your favorites.</p>
      )}
    </div>
  );
};

export default Favorites;