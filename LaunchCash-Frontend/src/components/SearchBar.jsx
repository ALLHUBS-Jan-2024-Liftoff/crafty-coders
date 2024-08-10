import React, {useState} from "react";

import {FaSearch} from "react-icons/fa";
import "./SearchBar.css";

export const SearchBar = () => {
const [input, setInput] = useState("")
return (
<div className="input-wrapper">
<FaSearch id="Search-icon" />
<input placeholder="Type to search..." value={input} onChange={(e) => setInput(e.target.value)} />
</div>
);
};
