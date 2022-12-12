import "./App.css"

import React from "react";
import Home from "./components/Home/Home";

export default class App extends React.Component { 


  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="main-container">
        <Home />
      </main>
    )
  }

}