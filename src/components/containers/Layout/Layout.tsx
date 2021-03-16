import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import Header from "./Header/Header";
import Gallery from "../../../Pages/Products/Gallery";
import CartCo from "../../../Pages/Products/Cart";
import Profile from "../../../Pages/User/Profile";
import Footer from "./Footer/Footer";

import { Cart } from "../../../Models/Cart";
import { Route, Switch } from "react-router-dom";

const Layout: React.FC = () => {
  const cart: readonly string[] = useSelector(
    (state: Cart) => state.products,
    shallowEqual
  );

  return (
    <div>
      <Header products={cart} />
      <Switch>
        <Route path="/profile" component={Profile} />
        <Route path="/cart" component={CartCo} />
        <Route path="/" component={Gallery} />
      </Switch>
      <Footer />
    </div>
  );
};

export default Layout;
