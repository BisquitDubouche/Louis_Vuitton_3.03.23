import React, { useState } from "react";

const Sidebar = ({
  isOpen,
  handleSidebarToggle,
  products,
  getFilteredProducts,
  onData,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCollection, setSelectedCollection] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleShowProducts = async () => {
    const newFilteredProducts = await getFilteredProducts(
      selectedCategory,
      selectedCollection,
      selectedColor
    );

    const searchedProducts = searchQuery
      ? newFilteredProducts.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : newFilteredProducts;

    setFilteredProducts(searchedProducts);
    onData(searchedProducts);
  };

  const categories = [...new Set(products.map((product) => product.sub_category))];
  const collections = [...new Set(products.map((product) => product.collection))];
  const colors = [...new Set(products.map((product) => product.color))];

  return (
    <div className={`sidebar-filter ${isOpen ? "open" : ""}`}>
      <div className="sidebar-filter-header">
        <button className="close-button" onClick={handleSidebarToggle}>
          Close
        </button>
      </div>
      <div className="sidebar-filter-content">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

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
            handleShowProducts();
            handleSidebarToggle();
          }}
        >
          Show Products
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
