import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/store";

const selectHomePage = (state: AppRootState) => state.homePage;
export const retrieveHomePage = createSelector(
  selectHomePage,
  /* memoization =>
   If homePage is the same as last time,
   don't calculate again, just return the saved homepage.
*/
  (homePage) => {
    return {
      popularDishes: homePage.popularDishes,
      newDishes: homePage.newDishes,
      topUsers: homePage.topUsers,
    };
  }
);
// export const retrieveNewDishes = createSelector(
//   selectHomePage,
//   (homePage) => homePage.newDishes
// );
// export const retrieveTopUsers = createSelector(
//   selectHomePage,
//   (homePage) => homePage.topUsers
// );
