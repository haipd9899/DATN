import {
  Grid,
  Label,
  Segment,
  Card,
  Dropdown,
  Header,
  Icon,
} from "semantic-ui-react";
import React, { useEffect } from "react";
import AddClassComponent from "./AddClass";
import EditClass from "./EditClass";

import { Outlet, Link } from "react-router-dom";
export default function GetAllClassComponent() {
  return (
    <div>
      <AddClassComponent />
      <Segment.Group horizontal>
        <Segment>
          <Header as="h2" icon textAlign="center">
            <Icon name="tasks" circular />
            <Header.Content>Missed Activity</Header.Content>
          </Header>
          <div style={{ textAlign: "center" }}>
            <Label style={{ textAlign: "center" }} circular color="red">
              0
            </Label>
          </div>
        </Segment>
        <Segment>
          <Header as="h2" icon textAlign="center">
            <Icon name="file text" circular />
            <Header.Content>Active Courses</Header.Content>
          </Header>
          <div style={{ textAlign: "center" }}>
            <Label circular color="green">
              0
            </Label>
          </div>
        </Segment>
        <Segment>
          <Header as="h2" icon textAlign="center">
            <Icon name="add user" circular />

            <Header.Content>Request Courses</Header.Content>
          </Header>
          <div style={{ textAlign: "center" }}>
            <Label style={{ textAlign: "center" }} circular color="grey">
              0
            </Label>
          </div>
        </Segment>
      </Segment.Group>
      <Grid columns={1}>
        <Grid.Column>
          <Segment raised>
            <Label as="a" color="red" ribbon>
              Live 2th
            </Label>
            <Grid columns={4}>
              <Grid.Column>
                <Card.Group stackable>
                  <Card color="red">
                    <Card.Content>
                      <Card.Header>
                        <Grid stackable>
                          <Grid.Row>
                            <Grid.Column width={12}>
                              <Link to="/stream">
                                <Header as="h3" color="red">
                                  Kĩ năng mềm
                                </Header>
                              </Link>
                            </Grid.Column>
                            <Grid.Column width={2}>
                              <Dropdown
                                fluid
                                pointing
                                direction="left"
                                className="icon"
                                icon="ellipsis vertical"
                              >
                                <Dropdown.Menu>
                                  <EditClass
                                    headerTitle="Archive Class"
                                    buttonTriggerTitle="Archive"
                                    // classes={co}
                                  />
                                </Dropdown.Menu>
                              </Dropdown>
                            </Grid.Column>
                          </Grid.Row>
                        </Grid>
                      </Card.Header>
                      <Card.Meta>2A1234</Card.Meta>
                      <Card.Description>
                        <p
                          style={{
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            maxHeight: 250,
                          }}
                        >
                          "Dành cho sinh viên k62 viện spkt"
                        </p>
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Card.Group>
              </Grid.Column>
            </Grid>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
}
