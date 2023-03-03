import Head from "next/head";
import Link from "next/link";
import ProductsContextProvider from "@/contexts/products_contex_provider";

export function MainLayout({ children, title = "LOUIS VUITTON" }) {
  return (
    <ProductsContextProvider>
    <nav>
      <Head>
        <title>{title} | MAKERS </title>
      </Head>
      <main>{children}</main>
    </nav>
    </ProductsContextProvider>
  );
}