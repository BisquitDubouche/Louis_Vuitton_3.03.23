import { MainLayout } from "@/components/main_layout";
import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";
import { useProductsLV } from "@/contexts/products/products_lv_contex_provider";
import { useEffect } from "react";
import Footer from "@/components/footer/Footer";

const Women = () => {
  const { getProducts, products, currentPage, setCurrentPage } =
    useProductsLV();

  const LV = "Female";

  useEffect(() => {
    getProducts(LV);
  }, [currentPage]);

  const handlePrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <MainLayout title='LOUIS VUITTON FOR HER'>
      <Navbar />
      <div className='lvarchlight2collection'>
        <img
          src='https://us.louisvuitton.com/images/is/image/PUSH7_monogram_US_DI3.jpg?wid=2048'
          alt=''
        />
        <div className='lvarchlight2collection-text'>
          <h1>LV ARCHLIGHT 2.0</h1>
          <p>
            The LV Archlight 2.0 transcends style norms. <br />
            Adorned in raffia, guipure lace or featuring <br />
            colorful technical materials on a sculptural light <br />
            weight platform, the latest iterations perpetuate <br />
            the avant-garde character of the iconic <br />
            LV Archlight sneaker, originally designed by Nicolas Ghesquière for
            the Spring-Summer 2018 <br />
            collection.
          </p>
        </div>
      </div>
      <div className='filter-container'>
        <span>For Her</span>
        <button>
          Filters
          <img
            src='https://icons.veryicon.com/png/o/miscellaneous/alicloud-official-website/filter-32.png'
            alt='error'
          />
        </button>
      </div>

      <div className='lvarchlight2collection-products'>
        {products?.map((product) => (
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
        <Footer />
    </MainLayout>
  );
};

export default Women;
