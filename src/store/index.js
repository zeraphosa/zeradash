import { configureStore } from "@reduxjs/toolkit";
import general from "./general";

const store = configureStore({
  reducer: {
    general,
  },
});

export default store;
