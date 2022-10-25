import React from "react";

import "react-dropzone-uploader/dist/styles.css";

import Dropzone from "react-dropzone-uploader";
import {
  Button,
  Dimmer,
  Dropdown,
  Form,
  Header,
  Loader,
  Message,
  Select,
} from "semantic-ui-react";
import { useState, useEffect } from "react";
import TextareaAutosize from "react-textarea-autosize";

import { useParams } from "react-router";

function FormCourses(props) {
  const { id } = useParams();
  const [titre, SetTitre] = useState("");
  const [description, SetDescription] = useState("");
  const [multiple_resources, SetMultiple_resources] = useState([]);
  const [formClassName, SetFormClassName] = useState("");
  const [formSuccessMessage, SetFormSuccessMessage] = useState("");
  const [formErrorMessage, SetFormErrorMessage] = useState("");
  const [loader, SetLoader] = useState(false);

  const handleTitreChanges = (e) => {
    console.log(id);
    SetTitre(e.target.value);
  };
  const handleDescriptionChanges = (e) => {
    SetDescription(e.target.value);
  };
  const AddCourse = (e) => {
    console.log("add course");
    e.preventDefault();
  };

  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);

    if (status === "done") {
      SetMultiple_resources(multiple_resources.concat(file));
    }
    if (status === "removed") {
      let multiple_resource = multiple_resources.slice();
      multiple_resource = multiple_resources.filter((u) => {
        return u !== file;
      });
      SetMultiple_resources(multiple_resource);
    }
  };

  return (
    <div>
      <Form className={formClassName} onSubmit={AddCourse}>
        <Form.Input
          label="Titre"
          type="text"
          placeholder={"Seance 1"}
          name="Titre"
          maxLength="40"
          required
          value={titre}
          onChange={handleTitreChanges}
        />
        <Form.Field
          control={TextareaAutosize}
          label="Description"
          type="text"
          placeholder="In this workshop we will learn ..."
          name="Description"
          required
          value={description}
          onChange={handleDescriptionChanges}
        />
        <Header as="h5" icon="file alternate outline" content="Select Seance" />

        <Header as="h5" icon="images outline" content="Select Files" />

        <Dropzone
          styles={{ dropzone: { minHeight: 120, maxHeight: 250 } }}
          onChangeStatus={handleChangeStatus}
        />
        <br />
        {loader ? (
          <Dimmer active inverted>
            <Loader inline="centered">Preparing Files ... please wait !</Loader>
          </Dimmer>
        ) : (
          <>
            <Message
              success
              color="green"
              header="Nice one! 📒 📕 📚 📖"
              content={formSuccessMessage}
            />
            <Message
              warning
              color="yellow"
              header="Woah! 😱 😨"
              content={formErrorMessage}
            />
          </>
        )}

        <br />
        <Button color="black" floated="right">
          Add
        </Button>
        <br />
        <br />
      </Form>
    </div>
  );
}

export default FormCourses;
