import { createStore } from "redux";
import { CountReducer } from "../reducer/CountReducer";

export default () => {
  const Store = createStore(CountReducer);

  return Store;
};
