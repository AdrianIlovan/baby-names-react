import React from "react";

const BabyNames = (props) => {
    return(
        <div className="container">
            <div className="names">
            {props.babyNamesData.map((prop, key) => (
                <div 
                    className={prop.sex === "m" ? "male" : "female"}>
                    <p key={prop.id}>
                    {prop.name}</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default BabyNames;