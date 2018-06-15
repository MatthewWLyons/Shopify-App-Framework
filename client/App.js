import React, { Component } from "react";
import { Page } from "@shopify/polaris";
import { EmbeddedApp } from "@shopify/polaris/embedded";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ViewProducts from "./components/ViewProducts";
import AddProduct from "./components/AddProduct";

class App extends Component {
  render() {
    const { apiKey, shopOrigin } = window;

    return (
      <EmbeddedApp shopOrigin={shopOrigin} apiKey={apiKey}>
        <Router>
          <Switch>
            <Route exact path="/">
              <ViewProducts />
            </Route>
            <Route exact path="/add">
              <AddProduct />
            </Route>
          </Switch>
        </Router>
      </EmbeddedApp>
    );
  }
}

export default App;
