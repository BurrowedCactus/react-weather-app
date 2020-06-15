import React from "react";
import { BrowserRouter , Route } from "react-router-dom";
import "./App.css";
import MyHeader from "./containers/MyHeader";
import MyBody from "./containers/MyBody";

function App() {
  return (
    <div>
      <MyHeader />
      <BrowserRouter >
        <Route path="/" exact component={MyBody} />
      </BrowserRouter >
    </div>
  );
}

export default App;
