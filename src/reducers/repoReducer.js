export default (state = [], action) => {
  switch (action.type) {
    case "GET_REPOSITORY":
      return action.payload;
    default:
      return state;
  }
};
