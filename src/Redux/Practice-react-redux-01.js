import { createStore } from "redux";

const CountState = { count: 0 };
const IncrimentFunc = () => ({
  type: "incriment",
});

const CountReducer = (state = CountState, action) => {
  switch (action.type) {
    case "INCRIMENT":
      return { count: state.count + 1 };
    case "DECRIMENT":
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};
const store = createStore(CountReducer);
store.dispatch(IncrimentFunc());
console.log(store.getState());
