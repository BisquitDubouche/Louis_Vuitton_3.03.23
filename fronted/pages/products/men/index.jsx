import { MainLayout } from "@/components/main_layout";
import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";
import { useProductsLV } from "@/contexts/products/products_lv_contex_provider";
import { useEffect, useState } from "react";
import Sidebar from "@/components/products/sidebar";

const Men = () => {
  const { getProducts, products, currentPage, setCurrentPage } =
    useProductsLV();

    const [sidebarOpen, setSidebarOpen] = useState(false);

  const LV = "Male";

  useEffect(() => {
    getProducts(LV);
  }, [currentPage]);

  const handlePrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };


  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <MainLayout title='LOUIS VUITTON FOR HER'>
      <Navbar />

      <div className='filter-container'>
        <span>For Him</span>
        <button onClick={handleSidebarToggle}>
          Filters
          <img
            src='https://icons.veryicon.com/png/o/miscellaneous/alicloud-official-website/filter-32.png'
            alt='error'
          />
        </button>
      </div>
      {sidebarOpen ? <Sidebar products={products}/> : ''}
      

      <div className='lvarchlight2collection-products'>
        {products?.map((product) => (
          <Link
            href={`men/${product.id}`}
            className='lvarchlight2collection-card'
            key={product.id}
          >
            <img src={product.image} alt='error' />
            <h3>{product.name}</h3>
            <h3 className='lvarchlight2collection-card-price'>
              ${product.price}.00
            </h3>
          </Link>
        ))}
      </div>
      <div className='pagination'>
        <button disabled={currentPage === 1} onClick={handlePrevPage}>
          Prev
        </button>
        <span>{currentPage}</span>
        <button
          disabled={
            !products?.length ||
            products?.length < 8 ||
            products?.length % 8 !== 0
          }
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>

 
    </MainLayout>
  );
};

export default Men;
