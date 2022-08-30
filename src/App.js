import { createStore } from "redux";
import "./App.css";
function App() {
  const store = createStore((state = { count: 0 }, action) => {
    // action coming from  dispatch And action type that we have to write

    switch (action.type) {
      case "INCRIMENT":
        return {
          count: state.count + 1,
        };
      case "DECRIMENT":
        return {
          count: state.count - 1,
        };
      case "INCRIMENTBY5":
        return {
          count: state.count + 5,
        };

      case "INCRIMENTBY10":
        return {
          count: state.count + action.IncrimentBYTen, // we can change our state with dynamic value of action property
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
  store.dispatch({
    type: "INCRIMENT",
  });
  store.dispatch({
    type: "INCRIMENTBY10",
    IncrimentBYTen: 10, // This is the dynamic value of action
  });
  unSubscribe_By_subscribe(); // this is the way unsubscript with subscribe method
  store.dispatch({
    type: "DECRIMENT",
  });
  store.dispatch({
    type: "DECRIMENT",
  });
  store.dispatch({
    type: "INCRIMENTBY5",
  });

  return (
    <div className="App">
      <h1> Hello REdux </h1>
    </div>
  );
}

export default App;
