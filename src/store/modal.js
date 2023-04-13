const initialState = {
  profile: false,
  settings: false,
  sidebar: false,
};

const modal = (state = initialState, action) => {
  switch (action.type) {
    case "setProfile":
      return { ...state, profile: !state.profile };
    case "setSettings":
      return { ...state, settings: !state.settings };
    case "setSidebar":
      return { ...state, sidebar: !state.sidebar };
    default:
      return state;
  }
};
export default modal;
