import React from "react";
import { Grid } from "semantic-ui-react";
import { Route } from "react-router-dom";
import SideBareComponent from "./SideBar/SideBare";
import Header from "./header/Header";
import StepBar from "./task/StepBar";
import AddPost from "./question/AddPost";

const Home = () => {
  return (
    <div>
      <Grid stackable celled="internally">
        <Grid.Row>
          <Grid.Column width={3}>
            <SideBareComponent />
          </Grid.Column>
          <Grid.Column width={12}>
            <Header />

            <br />

            <Grid>
              <Grid.Column
                mobile={16}
                tablet={8}
                computer={4}
                width={3}
              ></Grid.Column>
              <Grid.Column width={9}></Grid.Column>
              <Grid.Column width={4}></Grid.Column>
            </Grid>

            <Route path="/AddTask" render={(props) => <StepBar {...props} />} />
            <Route path="/stream" render={(props) => <AddPost {...props} />} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Home;
