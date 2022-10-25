import React from "react";
import { useState, useEffect } from "react";
import { Button, Form, Message } from "semantic-ui-react";

function FormTheme(props) {
  const [titre, SetTitre] = useState("");
  const [description, SetDescription] = useState("");

  const [dateCreation, SetDateCreation] = useState(Date.now());
  const [formClassName, SetFormClassName] = useState("");
  const [formSuccessMessage, SetFormSuccessMessage] = useState("");
  const [formErrorMessage, SetFormErrorMessage] = useState("");
  const CurrentClass = JSON.parse(localStorage.getItem("idClass"));

  const seanceId = props.seanceId;
  const handleTitreChanges = (e) => {
    SetTitre(e.target.value);
  };
  const handleDescriptionChanges = (e) => {
    SetDescription(e.target.value);
  };

  return (
    <div>
      <Form className={formClassName}>
        <Form.Input
          label="Titre"
          type="text"
          placeholder="Seance 1"
          name="Titre"
          maxLength="40"
          required
          value={titre}
          onChange={handleTitreChanges}
        />
        <Form.TextArea
          label="Description"
          type="TextArea"
          placeholder="In this workshop we will learn ..."
          name="Description"
          maxLength="5000"
          required
          value={description}
          onChange={handleDescriptionChanges}
        />
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
        <Button color="green" floated="right">
          Save
        </Button>
        <br /> {/* Yikes! Deal with Semantic UI React! */}
      </Form>
    </div>
  );
}

export default FormTheme;
