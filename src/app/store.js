import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../Features/Cart/cartSlice'
import searchReducer from "../Features/ListBike/searchSlice";
import userReducer from "../Features/Auth/userSlice";

const rootReducer = {
    cart: cartReducer,
    search: searchReducer,
    user: userReducer,
}
const store = configureStore(
    {
        reducer: rootReducer,
    }

)
export default store;