import React from "react";
import Header from "./Header/Header";
import Gallery from "../../../pages/Products/Gallery";
// import Cart from "../../../pages/Products/Cart/Cart";
import Profile from "../../../pages/User/Profile";
import Footer from "./Footer/Footer";
import { ProductCardProps } from "../../../Models/ProductCard";

import { User } from "../../../Models/User";
import { Address } from "../../../Models/Address";
import { Product } from "../../../Models/Product";
import { Order } from "../../../Models/Order";

// const PC: ProductCardProps = {
//   name: "Blouse",
//   price: 250,
//   sale: true,
//   discount: 10,
//   rating: 5,
//   discription:
//     "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
//   productImage:
//     "http://bestjquery.com/tutorial/product-grid/demo9/images/img-1.jpg",
//   productImage2:
//     "http://bestjquery.com/tutorial/product-grid/demo9/images/img-2.jpg",
// };

const custAddress: Address = {
  hno: "38",
  address: "dummy road",
  city: "dummy land",
  district: "dummy city",
  pin: 142365,
};
const PC: Product = {
  name: "Blouse",
  price: 250,
  sale: true,
  discount: 10,
  discription:
    "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
  productImage:
    "http://bestjquery.com/tutorial/product-grid/demo9/images/img-1.jpg",
};
const order: Order = {
  date: "20/03/2021",
  time: "05:14:00",
  product: PC,
};
const user: User = {
  name: "abcCustomer",
  phone: "9781425369",
  email: "abcCustomer@gmail.com",
  profileImage:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog",
  address: [custAddress],
  orders: [order],
};

const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      {/* <Cart {...PC} /> */}
      {/* <Profile {...user} /> */}
      <Gallery />
      <Footer />
    </div>
  );
};

export default Layout;
