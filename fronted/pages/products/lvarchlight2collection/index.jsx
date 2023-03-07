import { MainLayout } from "@/components/main_layout";
import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";
import { useProductsLV } from "@/contexts/products/products_lv_contex_provider";
import { useEffect } from "react";

const lvarchlight2collection = () => {
  const { getCollectionProducts, products } = useProductsLV();

  const LV = "LV Archlight 2.0 Collection";

  useEffect(() => {
    getCollectionProducts(LV)
  }, [])


  return (
    <MainLayout title='LV Archlight 2.0 Collection'>
      <Navbar />
     
      <div className='filter-container'>
        <span>LV Archlight 2.0 Collection</span>
        <button>
          Filters
          <img
            src='https://icons.veryicon.com/png/o/miscellaneous/alicloud-official-website/filter-32.png'
            alt='error'
          />
        </button>
      </div>
      <div className='lvarchlight2collection'>
        <img
          src='https://us.louisvuitton.com/images/is/image/HP_AU_ARCHLIGHT_ANNIVERSARY_DI3.jpg?wid=2048'
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
      <div className='lvarchlight2collection-products'>
        {products?.map((product) => (
          <Link
            href={`lvarchlight2collection/${product.id}`}
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
    </MainLayout>
  );
};

export default lvarchlight2collection;