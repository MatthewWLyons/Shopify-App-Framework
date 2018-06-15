import React, { Component } from "react";
import { Card, FormLayout, TextField, Page } from "@shopify/polaris";

class AddProduct extends Component {
  render() {
    return (
      <Page title="Add a Product">
        <Card sectioned>
          <FormLayout.Group>
            <TextField type="text" label="Name" />
            <TextField type="text" label="Type" />
          </FormLayout.Group>
          <FormLayout.Group>
            <TextField type="currency" label="Price" prefix="$" />
            <TextField type="currency" label="Compare At Price" prefix="$" />
          </FormLayout.Group>

          <FormLayout.Group>
            <TextField type="textarea" label="Description" multiline />
          </FormLayout.Group>
        </Card>
      </Page>
    );
  }
}

export default AddProduct;
