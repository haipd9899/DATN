import { React, useState } from "react";
import { Dropdown, Grid, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Theme from "../courseAndTheme/Theme";
import AddCourses from "../courseAndTheme/AddCourse";
import AddTask from "../task/AddTask";
// import ModalCourses from "../coursesAndSeances/ModalCourses";
// import ModalSeance from "../coursesAndSeances/ModalSeance";
// import { isAuth } from "../../helpers/auth";
// import ModalTaskFile from "../Task/ModalTaskFile";

function Header() {
  const [activeItem, setActiveItem] = useState("Stream");
  const handleItemClick = (e, { name }) => setActiveItem(name);
  return (
    <>
      <Menu pointing secondary>
        <Link to="/stream">
          <Menu.Item
            name="Stream"
            icon="comments"
            active={activeItem === "Stream"}
            onClick={handleItemClick}
            color="green"
          />
        </Link>
        <Link to="/FAQ">
          <Menu.Item
            name="FAQ"
            icon="comments"
            active={activeItem === "FAQ"}
            onClick={handleItemClick}
            color="green"
          />
        </Link>
        <Link to="/members">
          <Menu.Item
            name="Members"
            icon="users"
            active={activeItem === "Members"}
            onClick={handleItemClick}
            color="green"
          />
        </Link>
        <Link to={"/AddTask"}>
          <Menu.Item
            name="Tasks"
            icon="tasks"
            active={activeItem === "Tasks"}
            onClick={handleItemClick}
            color="green"
          />
        </Link>

        <Menu.Item position="right">
          <Dropdown floating className="icon" icon="add circle">
            <Dropdown.Menu>
              <Dropdown.Header
                icon="mouse pointer"
                content="Select something to add"
              />
              <Dropdown.Divider />
              <Theme
                headerTitle="Add Theme"
                buttonTriggerTitle="Add Theme"
                buttonSubmitTitle="Add"
                buttonColor="black"
                icon="th"
              />
              <AddCourses
                headerTitle="Add Courses"
                buttonTriggerTitle="Add Courses"
                buttonSubmitTitle="Add"
                buttonColor="red"
                icon="add"
              />
              <AddTask
                headerTitle="Add Task"
                buttonTriggerTitle="Add Task"
                buttonSubmitTitle="Add"
                buttonColor="red"
                icon="ad"
              />
              <Link to="/AddTask">
                <>
                  <Dropdown.Item icon="tasks" text="Add Quiz" />
                </>
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      </Menu>
    </>
  );
}

export default Header;
