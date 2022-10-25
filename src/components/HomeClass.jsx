import React from "react";
import { Container, Grid } from "semantic-ui-react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import GetAllClassComponent from "./class/GetAllClass";
import SideBareComponent from "./SideBar/SideBare";
const HomeClass = () => {
  return (
    <div>
      <Grid stackable celled="internally">
        <Grid.Row>
          <Grid.Column width={3}>
            <SideBareComponent />
          </Grid.Column>
          <Grid.Column width={13}>
            <Container textAlign="center"></Container>
            <br />
            <Grid>
              <Grid.Column width={3}></Grid.Column>
              <Grid.Column width={9}></Grid.Column>
              <Grid.Column width={4}></Grid.Column>
            </Grid>
            <GetAllClassComponent />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default HomeClass;
