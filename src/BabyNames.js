import React, { useState } from "react";

const BabyNames = (props) => {
    const [search, setSearch] = useState("");

    return(
        <div className="container">

            <input className="container" type="text" placeholder="Search for a Name: "
            onChange={e => setSearch(e.target.value)}></input>
            <div className="names">
            {props.babyNamesData.map((prop, key) => (
                <div 
                    className={prop.sex === "m" ? "male-names" : "female-names"}>
                    <p key={prop.id}>
                    {prop.name}</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default BabyNames;