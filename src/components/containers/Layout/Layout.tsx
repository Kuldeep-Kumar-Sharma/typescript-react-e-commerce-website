import React from "react";
import Header from "./Header/Header";
//import Gallery from "../../../pages/Products/Gallery/Gallery";
import Cart from "../../../pages/Products/Cart/Cart";

import Footer from "./Footer/Footer";
import { ProductCardProps } from "../../../Models/ProductCard";

const PC: ProductCardProps = {
  name: "Blouse",
  price: 250,
  sale: true,
  discount: 10,
  rating: 5,
  discription:
    "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
  productImage:
    "http://bestjquery.com/tutorial/product-grid/demo9/images/img-1.jpg",
  productImage2:
    "http://bestjquery.com/tutorial/product-grid/demo9/images/img-2.jpg",
};

const Layout = () => {
  return (
    <div>
      <Header />
      <Cart {...PC} />
      <Footer />
    </div>
  );
};

export default Layout;
