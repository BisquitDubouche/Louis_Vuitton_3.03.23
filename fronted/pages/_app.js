import "../styles/global_styles/global.scss";
import "../styles/navbar_styles/navbar.scss";
import 'styles/admin_styles/admin.scss'
import ProductsContextProvider from "@/contexts/products_contex_provider";

export default function MyApp({ Component, pageProps }) {
  return(
  <>
    <ProductsContextProvider>
      <Component {...pageProps} />
    </ProductsContextProvider>
  </>)
}
