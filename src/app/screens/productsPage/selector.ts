import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/store";

const selectProductsPage = (state: AppRootState) => state.productsPage;
export const retrieveProductsPage = createSelector(
  selectProductsPage,
  (productsPage) => {
    return {
      restaurant: productsPage.restaurant,
      chosenProduct: productsPage.chosenProduct,
      products: productsPage.products,
    };
  }
);
