import { createSlice } from "@reduxjs/toolkit";

const projects = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    addProject: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addProject } = projects.actions;
export default projects.reducer;
