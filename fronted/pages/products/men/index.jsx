import { MainLayout } from "@/components/main_layout";
import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";
import { useProductsLV } from "@/contexts/products/products_lv_contex_provider";
import { useEffect, useState } from "react";
import Sidebar from "@/components/products/sidebar";

const Men = () => {
  const {
    getProducts,
    pag_products,
    products,
    getFilteredProducts,
  } = useProductsLV();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [data, setData] = useState([]);
  const [filteredProd, setFilteredProd] = useState([]);

  useEffect(() => {
    getProducts("Male");
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      setFilteredProd(data);
    } else {
      setFilteredProd(pag_products);
    }
  }, [data, pag_products]);

  const handleData = (data) => {
    setData(data);
  };

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const renderProducts = () => {
    return filteredProd.map((product) => (
      <Link
        href={`women/${product.id}`}
        className="lvarchlight2collection-card"
        key={product.id}
      >
        <img src={product.image} alt="error" />
        <h3>{product.name}</h3>
        <h3 className="lvarchlight2collection-card-price">
          ${product.price}.00
        </h3>
      </Link>
    ));
  };

  return (
    <MainLayout title="LOUIS VUITTON FOR HER">
      <Navbar />

      <div className="filter-container">
        <span>For Him</span>
        <button onClick={handleSidebarToggle}>
          Filters
          <img
            src="https://icons.veryicon.com/png/o/miscellaneous/alicloud-official-website/filter-32.png"
            alt="error"
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
      <div className="lvarchlight2collection-products">{renderProducts()}</div>
    </MainLayout>
  );
};

export default Men;
