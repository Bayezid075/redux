import { combineReducers, createStore } from "redux";
import "./App.css";

function App() {
  const InitialStateValue = [];
  const DataReducer = (state = InitialStateValue, action) => {
    switch (action.type) {
      case "ADD":
        return { Text: 0 };

      default:
        return state;
    }
  };

  const sortedByReducerValue = {
    name: "zid",
    sortBy: "name",
    startDate: undefined,
    endDate: undefined,
  };
  const sortByReducer = (state = sortedByReducerValue, action) => {
    switch (action.type) {
      case "SORT":
        return ["Started Sorting"];

      default:
        return state;
    }
  };

  const store = createStore(
    combineReducers({
      identity: DataReducer,
      filter: sortByReducer,
    })
  );

  const dataFunc = () => ({
    type: "ADD",
  });
  const sortFunc = () => ({
    type: "SORT",
  });

  store.dispatch(dataFunc());

  store.dispatch(sortFunc());

  console.log(store.getState());
  return (
    <div className="App">
      <h1> Hello REdux </h1>
    </div>
  );
}

export default App;
