import { MainLayout } from "@/components/main_layout";
import Link from "next/link";
const Error = () => {
  return (
    <MainLayout>
      <nav className="error-nav">
        <Link href={"/"} className="error-link">
          LOUIS VUITTON
        </Link>
      </nav>
      <div className="error-image">
        <img
          src="https://us.louisvuitton.com/static/23.05.1-RC/assets/404/404_illustration-large.jpg"
          width="350"
        ></img>
      </div>
      <h1 className="error-page">PAGE NOT FOUND</h1>
      <div className="error-text">
        <p>
          We apologize but we cannot find the page you are looking for. Please
          contact our Client Services team or navigate to another page. Thank
          you.
        </p>
      </div>
    </MainLayout>
  );
};

export default Error;
