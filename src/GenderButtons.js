import React from "react";

const GenderButtons = ({femaleGender, maleGender, onMaleClick, onFemaleClick}) => {
    return(
        <div className="buttons">
        <div className="female-button">
            <button onClick={onFemaleClick}>
                {femaleGender ? "Show All" : "Female"}
            </button>
        </div>
        <div className="male-button">
                        <button onClick={onMaleClick}>
                {maleGender ? "Show All" : "Male"}
                        </button>
        </div>
        </div>

    );
};

export default GenderButtons;
