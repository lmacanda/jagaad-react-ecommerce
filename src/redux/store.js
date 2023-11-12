import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import productsReducer from "./slices/productsSlice";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  // Add more reducers if needed
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
