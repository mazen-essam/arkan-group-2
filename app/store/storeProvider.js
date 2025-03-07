"use client"; // Mark this as a Client Component
import { Provider } from "react-redux";
import { store } from "./store"; // Import the store

export default function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}