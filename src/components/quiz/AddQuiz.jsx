import React, { useState } from "react";

import Select from "react-select";
import SemanticDatepicker from "react-semantic-ui-datepickers";

import {
  Dropdown,
  Button,
  Form,
  Grid,
  Rail,
  Segment,
  TextArea,
  Label,
  Header,
} from "semantic-ui-react";
import { MultiSelect } from "react-multi-select-component";

function AddQuiz({ props }) {
  return (
    <div>
      <Segment raised>
        <Grid>
          <Grid.Row>
            <Grid.Column width={11}>
              <Form>
                <Form.Field>
                  <Form.Input
                    label="Title"
                    required
                    value=""
                    placeholder="Title"
                  />
                </Form.Field>
                <Form.Field required>
                  <label>Description</label>
                  <TextArea
                    required
                    label="Description"
                    value=""
                    placeholder="Description.."
                    style={{ minHeight: 50 }}
                  />
                </Form.Field>

                <Form.Field>
                  <label>Due</label>
                  <SemanticDatepicker value="" />
                </Form.Field>
              </Form>
            </Grid.Column>
            <Grid.Column width={5}>
              <Header
                as="h5"
                icon="check square outline"
                content={"Choose Theme  "}
              />
              <Select value="" options="" />

              <Header
                as="h5"
                icon="check square outline"
                content={" For Student  "}
              />
              <Form.Field required>
                <MultiSelect options="" value="" labelledBy="Select" />
              </Form.Field>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Button type="submit" floated="right" color="red">
        Next
      </Button>
    </div>
  );
}

export default AddQuiz;
