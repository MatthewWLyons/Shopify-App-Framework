import React, { Component } from "react";
import { Page } from "@shopify/polaris";

import ApiConsole from "./ApiConsole";

class ViewProducts extends Component {
  render() {
    return (
      <Page
        title="Welcome"
        primaryAction={{
          content: "Add A Product",
          url: "/apps/lyonsapp-test/add"
        }}
      >
        <ApiConsole />
      </Page>
    );
  }
}

export default ViewProducts;
