import Head from "next/head";
import { MainLayout } from "@/components/main_layout";
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import ProductsContextProvider from "@/contexts/products_contex_provider";

export default function Home() {
  return (
    <>
      <ProductsContextProvider>
        <MainLayout>
          <Navbar />
        </MainLayout>
      </ProductsContextProvider>
    </>
  );
}
