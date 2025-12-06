import React, { useEffect } from "react";
import { Container } from "@mui/material";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import "../../../css/home.css";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setPopularDishes } from "./slice";
import { retrieveHomePage } from "./selector";
import { Product } from "../../../lib/types/product";

const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
});

const homePageRetriever = createSelector(retrieveHomePage, (homePage) => {
  return {
    popularDishes: homePage.popularDishes,
    newDishes: homePage.newDishes,
    topUsers: homePage.topUsers,
  };
});

export default function HomePage() {
  const { setPopularDishes } = actionDispatch(useDispatch());
  const { popularDishes, newDishes, topUsers } = useSelector(homePageRetriever);
  // Selectors: Store => Data
  useEffect(() => {
    // Backend server data request => DATA
    const result = [
      {
        _id: "6908294b0fc758ccac786630",
        productStatus: "PROCESS",
        productCollection: "DISH",
        productName: "SHAURMA",
        productPrice: 9,
        productLeftCount: 10,
        productSize: "NORMAL",
        productVolume: 1,
        productDesc: "delicious ",
        productImages: [
          "uploads/products/cca90ff4-cb98-4e30-a2ff-1cabbebec1a8.jpg",
          "uploads/products/93de5c73-2fee-46e3-b99e-381c3fa1d396.jpg",
        ],
        productViews: 3,
        createdAt: "2025-11-03T04:02:19.279Z",
        updatedAt: "2025-11-17T12:21:52.553Z",
        __v: 0,
      },
      {
        _id: "6917fc5d88dc3caa62681d2d",
        productStatus: "PROCESS",
        productCollection: "DISH",
        productName: "SALAD",
        productPrice: 10,
        productLeftCount: 1000,
        productSize: "SET",
        productVolume: 1,
        productDesc: "delicious ",
        productImages: [
          "uploads/products/0989fe4b-eb2e-48e4-9400-d845a29b6f0b.jpg",
        ],
        productViews: 0,
        createdAt: "2025-11-15T04:06:53.785Z",
        updatedAt: "2025-11-15T05:57:04.475Z",
        __v: 0,
      },
    ];

    // slice: Data => Redux Store
    // @ts-ignore
    setPopularDishes(result);
  }, []);
  return (
    <div className="homepage">
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advertisement />
      <ActiveUsers />
      <Events />
    </div>
  );
}
