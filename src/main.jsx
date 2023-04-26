import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";

const initialState = {
  user: {
    name: "",
    age: 0,
    gender: "",
  },
};

const userReducer = (state = initialState, action) => {
  if (action.type === "CHANGE_NAME") {
    return { ...state, name: action.payload };
  } else if (action.type === "CHANGE_AGE") {
    return { ...state, age: action.payload };
  } else if (action.type === "CHANGE_GENDER") {
    return { ...state, gender: action.payload };
  }
  return state;
};

const store = createStore(userReducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
