import Head from "next/head";
import Link from "next/link";
import ProductsContextProvider from "@/contexts/admin/products_context_provider";

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