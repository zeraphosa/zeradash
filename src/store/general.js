const initialState = {
  profile: false,
  settings: false,
  sidebar: true,
  appearance: true,
  createproject: false,
};

const general = (state = initialState, action) => {
  switch (action.type) {
    case "setProfile":
      return { ...state, profile: !state.profile };
    case "setSettings":
      return { ...state, settings: !state.settings };
    case "setCreateProject":
      return { ...state, createproject: !state.createproject };
    case "setSidebar":
      return { ...state, sidebar: !state.sidebar };
    case "setAppearance":
      return { ...state, appearance: !state.appearance };
    default:
      return state;
  }
};
export default general;
