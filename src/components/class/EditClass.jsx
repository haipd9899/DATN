import { useState, useEffect } from "react";
import { Button, Dropdown, Feed, Icon, Modal } from "semantic-ui-react";
import { Form, Input, TextArea } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";

const options = [
  { key: 1, text: "red", value: "red" },
  { key: 2, text: "blue", value: "blue" },
  { key: 3, text: "yellow", value: "yellow" },
  { key: 4, text: "grey", value: "grey" },
  { key: 5, text: "pink", value: "pink" },
  { key: 6, text: "green", value: "green" },
  { key: 7, text: "olive", value: "olive" },
  { key: 8, text: "teal", value: "teal" },
  { key: 9, text: "violet", value: "violet" },
  { key: 10, text: "purple", value: "purple" },
  { key: 11, text: "brown", value: "brown" },
  { key: 12, text: "black", value: "black" },
  { key: 13, text: "white", value: "white" },
];

export default function EditClass(props) {
  const [modalOpen, SetModalOpen] = useState(false);
  const handleOpen = (e) => SetModalOpen(true);
  const handleClose = (e) => SetModalOpen(false);
  let [color, setClassColor] = useState();
  const selectedClass = (data) => {
    console.log(data.target.innerText);
    setClassColor(data.target.innerText);
  };

  return (
    <>
      <Modal
        trigger={<Dropdown.Item onClick={handleOpen} icon="edit" text="Edit" />}
        open={modalOpen}
        onClose={handleClose}
        dimmer="inverted"
      >
        <Modal.Header>Edit Class</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Group widths="equal">
              <Form.Field
                control={Input}
                label="Class Name"
                placeholder="Class Name"
                name="className"
                value="Kĩ năng mềm"
              />
              <Form.Field
                control={Input}
                label="Class Section"
                placeholder="Class Section"
                name="classSection"
                value="@A1234"
              />
              <Form.Field
                control={Dropdown}
                label="Class Color"
                placeholder="Class Color"
                name="classColor"
                clearable
                selection
                options={options}
              />
              <Form.Field
                control={Input}
                label="Class Level"
                placeholder="Class Level"
                name="classLevel"
                value="2"
              />
            </Form.Group>
            <Form.Field
              control={TextArea}
              label="Class Description"
              placeholder="Class Description"
              name="classDescription"
              value="Dành cho sinh viên k63 viện sư phạm kĩ thuật"
            />
            <Form.Group></Form.Group>

            <Button.Group floated="right">
              <Button onClick={() => handleClose()}>Cancel</Button>
              <Button.Or />
              <Button color="red" type="submit">
                Update
              </Button>
            </Button.Group>
          </Form>
        </Modal.Content>
        <Modal.Content></Modal.Content>
        <Modal.Actions></Modal.Actions>
      </Modal>
    </>
  );
}
