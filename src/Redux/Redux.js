import { createStore } from "redux";
const store = createStore((state = { count: 0 }) => {
  return state;
});
// Action -  an Object that go to store

store.dispatch({
  action: "INCRIMENT",
});

console.log(store.getState());
