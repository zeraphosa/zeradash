import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
};

const projects = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject: (state, action) => {
      state.projects = [...state.projects, action.payload];
    },
  },
});

export const { addProject } = projects.actions;
export default projects.reducer;
