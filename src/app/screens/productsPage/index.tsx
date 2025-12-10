import { Route, Switch, useRouteMatch } from "react-router-dom";
import { Container } from "@mui/material";
import path from "path";
import ChosenProduct from "./ChosenProduct";
import Products from "./Products";
import "../../../css/products.css";
import { useDispatch, useSelector } from "react-redux";
import { retrieveProductsPage } from "./selector";
import { Dispatch } from "@reduxjs/toolkit";
import { Member } from "../../../lib/types/member";
import { setChosenProduct, setProducts, setRestaurant } from "./slice";
import { Product } from "../../../lib/types/product";
import { useEffect } from "react";
import ProductService from "../../services/ProductService";
import MemberService from "../../services/MemberService";
import { ProductCollection } from "../../../lib/enums/product.enum";

export default function ProductsPage() {
  const products = useRouteMatch();
  return (
    <div className="products-page">
      <Switch>
        <Route path={`${products.path}/:productId`}>
          <ChosenProduct />
        </Route>
        <Route path={`${products.path}`}>
          <Products />
        </Route>
      </Switch>
    </div>
  );
}
