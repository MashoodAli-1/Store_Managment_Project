import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/Data/DataSlice";
import companyReducer from "../features/Data/CompanySlice";
import customerReducer from "../features/Data/CustomerSlice";
import catagoryReducer from "../features/Data/CatagorySlice";
import partySlice from "../features/Data/PartiesSlice";
import stockReducer from "../features/Data/StockSlice";
const store = configureStore({
  reducer: {
    data: dataReducer,
    company: companyReducer,
    customer: customerReducer,
    category: catagoryReducer,
    party: partySlice,
    stock: stockReducer,
  },
});

export default store;
