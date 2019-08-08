import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import RootContainer from "./Containers/RootContainer";
import configureStore from "./Redux/Store";
import { Provider } from "react-redux";

const { store } = configureStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RootContainer />
      </Provider>
    </div>
  );
}

export default App;
