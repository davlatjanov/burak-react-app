import { Member } from "./member";
import { Product } from "./product";

export interface AppRootState {
  homePage: HomePageState;
  productsPage: ProductsPage;
}

/*HOME PAGE*/
export interface HomePageState {
  popularDishes: Product[];
  newDishes: Product[];
  topUsers: Member[];
}

export interface ProductsPage {
  restaurant: Member | null;
  chosenProduct: Product | null;
  products: Product[];
}

/*PRODUCTS PAGE*/
/*ORDERS PAGE*/

/*Screen components based type integration*/
/*Target Oriented type integration*/
