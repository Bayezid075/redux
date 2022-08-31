import { createStore, combineReducers } from "redux";

const DataReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return {};

    default:
      return state;
  }
};

const DemoData = {
  identity: [
    {
      id: "ok2520",
      name: "Bayezid",
      email: "mdbayezid791@gmail.com",
      password: 123456,
      createdAt: 0,
    },
  ],
  filters: [
    {
      name: "zid",
      sortBy: "name",
      startDate: undefined,
      endDate: undefined,
    },
  ],
};
