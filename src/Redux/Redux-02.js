import { createStore } from "redux";
import "./App.css";

const IncrimentBy = (payload = {}) => {
  // payload acces the function data and its property
  // dispatch function whice on below to connect payload and action together
  return {
    type: "INCRIMENT",
    incrimentby: payload.incrimentby,
  };
};
const DecrimentBy = (payload = {}) => {
  return {
    type: "DECRIMENT",
    decrimentby: payload.decrimentby,
  };
};

const store = createStore((state = { count: 0 }, action) => {
  // action coming from  dispatch And action type that we have to write

  switch (action.type) {
    case "INCRIMENT":
      return {
        count: state.count + action.incrimentby, // this incriment is come for dispatch
      };
    case "DECRIMENT":
      return {
        count: state.count - action.decrimentby,
      };

    default:
      return state;
  }
});

const unSubscribe_By_subscribe = store.subscribe(() => {
  // subcribe get data when data change
  console.log(store.getState());
});
// Action -  an Object that go to store
// if we write one more action type it will be get update twice base our argument
store.dispatch(IncrimentBy({ incrimentby: 100 }));

// this is the way unsubscript with subscribe method
unSubscribe_By_subscribe();

store.dispatch(DecrimentBy({ decrimentby: 50 }));
