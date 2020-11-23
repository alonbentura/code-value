import React from "react";

const ActionBar = (props) => {
  return (
    <div>
      <button className="button" onClick={() => props.setViewProduct(true)}>
        Add
      </button>
      <input
        placeholder="search products"
        onChange={(e) => props.searchProduct(e.target.value)}
      />
      <select>
        <option value="name">Name</option>
        <option value="recentlyAdd">Recently Add</option>
      </select>
    </div>
  );
};
export default ActionBar;
