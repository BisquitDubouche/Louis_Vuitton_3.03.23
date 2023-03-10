import React, { useEffect, useState } from "react";
import { MainLayout } from "@/components/main_layout";
import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";
import { useProductsLV } from "@/contexts/products/products_lv_contex_provider";
import Sidebar from "@/components/products/sidebar";

const Women = () => {
  const { getProducts, products, getFilteredProducts } = useProductsLV();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [data, setData] = useState([]);
  const [filteredProd, setFilteredProd] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getProducts("Female");
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      setFilteredProd(data);
    } else {
      setFilteredProd(products);
    }
  }, [data, products]);

  useEffect(() => {
    const searchedProducts = searchQuery
      ? products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : data.length > 0
      ? data
      : products;

    setFilteredProd(searchedProducts);
  }, [searchQuery, products, data]);

  const handleData = (data) => {
    setData(data);
  };

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const renderProducts = () => {
    if (!filteredProd) return null;
    return filteredProd
      .slice(0, 8) // Display only the first 8 products
      .map((product) => (
        <Link
          href={`women/${product.id}`}
          className='lvarchlight2collection-card'
          key={product.id}
        >
          <img src={product.image} alt='error' />
          <h3>{product.name}</h3>
          <h3 className='lvarchlight2collection-card-price'>
            ${product.price}.00
          </h3>
        </Link>
      ));
  };

  return (
    <MainLayout title='LOUIS VUITTON FOR HER'>
      <Navbar />

      <div className='filter-container'>
        <span>For Her</span>
        <input
          type='text'
          placeholder='Search...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSidebarToggle}>
          Filters
          <img
            src='https://icons.veryicon.com/png/o/miscellaneous/alicloud-official-website/filter-32.png'
            alt='error'
          />
        </button>
      </div>
      {sidebarOpen ? (
        <Sidebar
          isOpen={sidebarOpen}
          handleSidebarToggle={handleSidebarToggle}
          getFilteredProducts={getFilteredProducts}
          products={products}
          onData={handleData}
        />
      ) : null}
      <div className='lvarchlight2collection-products'>{renderProducts()}</div>
    </MainLayout>
  );
};

export default Women;
