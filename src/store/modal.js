// import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: false,
  settings: false,
};

const modal = (state = initialState, action) => {
  switch (action.type) {
    case "setProfile":
      return { ...state, profile: !state.profile };
    case "setSettings":
      return { ...state, settings: !state.settings };
    default:
      return state;
  }
};
export default modal;

// const modal = createSlice({
//     name: "modal",
//     initialState,
//     reducers: {
//       showProfile: (state) => {
//         state.modal = !state.modal;
//       },
//     },
//   });
// export const { showProfile } = modal.actions;
// export default modal.reducer;
