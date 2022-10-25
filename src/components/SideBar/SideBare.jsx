import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Image,
  Button,
  Icon,
  Message,
  Menu,
  Label,
  Grid,
  List,
  Divider,
  Dropdown,
  Segment,
  Step,
} from "semantic-ui-react";

function SideBareComponent() {
  const [activeItem, SetActiveItem] = useState("Dashboard");

  return (
    <>
      <Grid stackable>
        <Card stackable>
          {/* <Image src="" wrapped ui={false} /> */}
          <Card.Content>
            <Card.Header>
              Hello Pham Dinh Hai
              {"  |  "}
              <Label circular color="red" empty></Label>
            </Card.Header>
            <Card.Meta>
              <span className="date">hai</span>
            </Card.Meta>
            <Card.Description></Card.Description>
          </Card.Content>
          <Card.Content>
            <Menu size="small" fluid vertical>
              <Menu.Item
                icon="comments"
                name="Dashboard"
                active={activeItem === "Dashboard"}
                onClick={console.log("hello")}
              >
                Dashboard
              </Menu.Item>

              <Menu.Item
                icon="archive"
                name="Archived"
                active={activeItem === "Archived"}
                onClick={console.log("hello")}
              >
                Archived
              </Menu.Item>

              <Menu.Item
                name="Routine"
                active={activeItem === "Routine"}
                onClick={console.log("hello")}
              >
                Routine
              </Menu.Item>
            </Menu>
          </Card.Content>
        </Card>
      </Grid>
    </>
  );
}

export default SideBareComponent;
