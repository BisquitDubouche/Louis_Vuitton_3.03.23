import React, { useState, useEffect } from "react";
import { useProductsLV } from "@/contexts/products/products_lv_contex_provider";

const Sidebar = ({
  isOpen,
  handleSidebarToggle,
  products,
  onData,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCollection, setSelectedCollection] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const { getFilteredProducts } = useProductsLV();

  const categories = [...new Set(products.map((product) => product.sub_category))];
  const collections = [...new Set(products.map((product) => product.collection))];
  const colors = [...new Set(products.map((product) => product.color))];

  useEffect(() => {
    getFilteredProducts(selectedCategory, selectedCollection, selectedColor);
  }, [selectedCategory, selectedCollection, selectedColor]);

  return (
    <div className={`sidebar-filter ${isOpen ? "open" : ""}`}>
      <div className="sidebar-filter-header">
        <button className="close-button" onClick={handleSidebarToggle}>
          Close
        </button>
      </div>
      <div className="sidebar-filter-content">
        <select
          name='categories'
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value=''>All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select
          name='collection'
          value={selectedCollection}
          onChange={(e) => setSelectedCollection(e.target.value)}
        >
          <option value=''>All Collections</option>
          {collections.map((collection) => (
            <option key={collection} value={collection}>
              {collection}
            </option>
          ))}
        </select>
        <select
          name='color'
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
        >
          <option value=''>All Colors</option>
          {colors.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
        <button
          onClick={() => {
            handleSidebarToggle();
            const filteredData = products.filter((product) => {
              if (
                (selectedCategory === "" ||
                  product.sub_category === selectedCategory) &&
                (selectedCollection === "" ||
                  product.collection === selectedCollection) &&
                (selectedColor === "" || product.color === selectedColor)
              ) {
                return true;
              }
              return false;
            });
            onData(filteredData);
          }}
        >
          Show Products
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
