import React, { Component } from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import MenuApp from "./components/MenuApp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MenuApp>CX Exchange API Documentation</MenuApp>
        </header>
        <SwaggerUI url="/swagger.json" />
      </div>
    );
  }
}

export default App;
