import { configureStore } from "@reduxjs/toolkit";
import general from "./general";
import projects from "./projects";

const store = configureStore({
  reducer: {
    general,
    projects
  },
});

export default store;
