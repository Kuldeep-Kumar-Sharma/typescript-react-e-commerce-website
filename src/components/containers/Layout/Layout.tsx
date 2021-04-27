import React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import Header from "./Header/Header";
import Gallery from "../../../Pages/Products/Gallery";
import CartCo from "../../../Pages/Products/Cart";
import Profile from "../../../Pages/User/Profile";
import Footer from "./Footer/Footer";

import { AppState } from "../../../Models";
import { Route, Switch } from "react-router-dom";
import { Dispatch } from "redux";

import {
  loadGallerySplashes,
  loadProductCards,
} from "../../../Store/actions/galleryActionCreators";

const Layout: React.FC = () => {
  const cart: readonly string[] = useSelector(
    (state: AppState) => state.ctRr.products,
    shallowEqual
  );
  const dispatch: Dispatch<any> = useDispatch();
  dispatch(loadGallerySplashes());
  dispatch(loadProductCards());

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
