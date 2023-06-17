import React, { useState } from "react";
import babyNamesData from './babyNamesData.json'


const getFilteredItems = (search, items) => {
    if (!search) {
        return items
    }
    return items.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
}


const BabyNames = (props) => {
    const [search, setSearch] = useState("");
    const filteredItems = getFilteredItems(search, babyNamesData);

    return(
        <div className="container">
            <label>Search for baby names</label>
            <input className="search-bar" 
                type="text" 
                placeholder="Search for a Name: "
                value={search}
                onChange={(e) => setSearch(e.target.props)}></input>
            <div>
                {filteredItems.map(item => <p key={item.name}>{item.name}</p>)}
            </div>

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