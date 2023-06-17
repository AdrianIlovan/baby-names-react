import React, { useState } from "react";
import babyNamesData from './babyNamesData.json'

const getFilteredItems = (search, props) => {
    if (!search) {
        return props
    }
    return props.filter(prop => prop.name.toLowerCase().includes(search.toLowerCase()));
}

const SearchBar = () => {
    const [search, setSearch] = useState("");
    const filteredItems = getFilteredItems(search, babyNamesData);
    return(
        <div>
            <label>Search for baby names</label>
            <input className="search-bar" 
                type="text" 
                placeholder="Search for a Name: "
                // value={search}
                onChange={(e) => setSearch(e.target.value)}></input>
                {filteredItems.map(prop => <p key={prop.name}>{prop.name}</p>)}
         </div>    
    
        )
}


export default SearchBar;


//event change event.target.value
//search for name 
//display in a list or in the page (container)
//case-insensitive
//when search bar is empty all names shown