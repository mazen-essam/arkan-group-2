// store.js
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import propertySlice from "./propertiesSlice"; // Your real property slice
import serviceSlice from "./serviceSlice"; // Your other slices
import apartmentDetailsReducer from "./apartmentDetailsSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      service: serviceSlice,
      properties: propertySlice, // Only use the real property slice\
      apartmentDetails: apartmentDetailsReducer,
    },
  });

export const wrapper = createWrapper(makeStore);
export const store = makeStore();