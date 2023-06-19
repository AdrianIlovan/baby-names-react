import React from "react";

const Favorites = ({favorites}) => {
    return (
        <div className="favorites">
            <h1>Favorites: </h1>
            <ul>
                {favorites.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Favorites;