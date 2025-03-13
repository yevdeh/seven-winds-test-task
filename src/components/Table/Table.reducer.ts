export const reducer = (state, action) => {
  switch (action.type) {
    case "init":
      return action.payload;
    default:
      return state;
  }
};
