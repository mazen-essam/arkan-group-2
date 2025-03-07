import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import propertiesSlice from "./propertiesSlice";
import serviceSlice from "./serviceSlice";
import apartmentsReducer from "./fakePropertySlice";

// Create the store
const makeStore = () =>
  configureStore({
    reducer: {
      service: serviceSlice,
      rent: propertiesSlice,
      apartments: apartmentsReducer,
    },
  });

// Create the wrapper
export const wrapper = createWrapper(makeStore);

// Export the store for client-side usage
export const store = makeStore();