import "../styles/global_styles/global.scss";
import "../styles/navbar_styles/main_navbar.scss";
import "../styles/navbar_styles/navbar.scss";
import "styles/admin_styles/admin.scss";
import '../styles/myLV/myLV.scss'
import "../styles/footer_styles/Footer.module.scss"
import "../styles/products_styles/products.scss";
import '../styles/products_styles/product_details.scss'
import ProductsContextProvider from "@/contexts/admin/products_context_provider";
import AuthContextProvider from "@/contexts/auth/auth_context_provider";
import ProductsContextProviderLV from "@/contexts/products/products_lv_contex_provider";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <ProductsContextProviderLV>
        <AuthContextProvider>
          <ProductsContextProvider>
            <Component {...pageProps} />
          </ProductsContextProvider>
        </AuthContextProvider>
      </ProductsContextProviderLV>
    </>
  );
}
