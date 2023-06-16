import React from "react";

const BabyNames = (props) => {
    return(
        <div className="container">
            <div></div>
            {props.babyNamesData.map((prop, key) => (
                <p key={prop.id}>{prop.name}</p>
            ))}
        </div>
    )
}

export default BabyNames;