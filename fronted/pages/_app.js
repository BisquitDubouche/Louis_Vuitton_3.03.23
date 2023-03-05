import "../styles/global_styles/global.scss";
import "../styles/navbar_styles/main_navbar.scss";
import "../styles/navbar_styles/navbar.scss";
import "styles/admin_styles/admin.scss";
import "../styles/products/bags/bags.scss";
import '../styles/myLV/myLV.scss'
import ProductsContextProvider from "@/contexts/admin/products_context_provider";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <ProductsContextProvider>
        <Component {...pageProps} />
      </ProductsContextProvider>
    </>
  );
}
