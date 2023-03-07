import Head from "next/head";
import { MainLayout } from "@/components/main_layout";
import Link from "next/link";
import MainNavbar from "@/components/navbar/MainNavbar";
import ProductsContextProvider from "@/contexts/admin/products_context_provider";
import AuthContextProvider from "../contexts/auth/auth_context_provider";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <AuthContextProvider>
      <ProductsContextProvider>
        <MainLayout>
          <div className='background-image'>
            <MainNavbar/>
           <div className="FF23Womens">
            <h1>WOMEN'S FALL-WINTER 2023 SHOW</h1>
            <h1>WOMEN'S FALL-WINTER 2023 SHOW</h1>
            <h1>WOMEN'S FALL-WINTER 2023 SHOW</h1>
            <h1>WOMEN'S FALL-WINTER 2023 SHOW</h1>
            <h1>WOMEN'S FALL-WINTER 2023 SHOW</h1>
            <h1>WOMEN'S FALL-WINTER 2023 SHOW</h1>
            <h1>WOMEN'S FALL-WINTER 2023 SHOW</h1>
            <h1>WOMEN'S FALL-WINTER 2023 SHOW</h1>
            <h1>WOMEN'S FALL-WINTER 2023 SHOW</h1>
            <h1>WOMEN'S FALL-WINTER 2023 SHOW</h1>
            <h1>WOMEN'S FALL-WINTER 2023 SHOW</h1>
            <h1>WOMEN'S FALL-WINTER 2023 SHOW</h1>
            <h1>WOMEN'S FALL-WINTER 2023 SHOW</h1>
            <h1>WOMEN'S FALL-WINTER 2023 SHOW</h1>
            <h1>WOMEN'S FALL-WINTER 2023 SHOW</h1>
            <h1>WOMEN'S FALL-WINTER 2023 SHOW</h1>
            <h1>WOMEN'S FALL-WINTER 2023 SHOW</h1>
            <h1>WOMEN'S FALL-WINTER 2023 SHOW</h1>
            <h1>WOMEN'S FALL-WINTER 2023 SHOW</h1>
            <h1>WOMEN'S FALL-WINTER 2023 SHOW</h1>
            <h1>WOMEN'S FALL-WINTER 2023 SHOW</h1>
            <h1>WOMEN'S FALL-WINTER 2023 SHOW</h1>
            <button>Countdown to the Show</button>
            <div>
            </div>
           </div>
          </div>
        <Footer />
        </MainLayout>
      </ProductsContextProvider>
      </AuthContextProvider>
    </>
  );
}
