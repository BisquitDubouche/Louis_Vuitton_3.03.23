import React from "react";

const Sidebar = ({ isOpen, onClose, products }) => {
  const categories = [...new Set(products.map((product) => product.sub_category))];
  const collections = [...new Set(products.map((product) => product.collection))];
  const colors = [...new Set(products.map((product) => product.color))];

  return (
    <div className={`sidebar-filter ${isOpen ? "open" : ""}`}>
      <div className="sidebar-filter-header">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
      <div className="sidebar-filter-content">
        <select name="categories">
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
        <select name="collection">
          {collections.map((collection) => (
            <option key={collection}>{collection}</option>
          ))}
        </select>
        <select name="color">
          {colors.map((color) => (
            <option key={color}>{color}</option>
          ))}
        </select>
        <button>Show Products</button>
      </div>
    </div>
  );
};

export default Sidebar;
