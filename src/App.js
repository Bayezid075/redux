import "./App.css";
import ConfigStore from "./store/ConfigStore";
import { IncrimentFunc } from "./actions/CountAction";
import { connect } from "react-redux";
import CountLoader from "./CountLoader/CountLoader";

function App() {
  const store = ConfigStore();

  store.dispatch(IncrimentFunc());

  console.log(store.getState());

  return (
    <div className="App">
      <h1> Hello REdux </h1>
      <CountLoader />
    </div>
  );
}

export default App;
