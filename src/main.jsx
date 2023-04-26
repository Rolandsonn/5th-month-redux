import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import { userReducer } from "./redux/userReducer.js";
const store = createStore(userReducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
