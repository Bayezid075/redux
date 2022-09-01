const CountState = { count: 155, text: "hello" };
export const CountReducer = (state = CountState, action) => {
  switch (action.type) {
    case "INCRIMENT":
      return { count: state.count + 15, text: "Incrised" };
    case "DECRIMENT":
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};
