import React, { useState } from "react";
import {
  Step,
  Icon,
  Button,
  Divider,
  Header,
  Message,
} from "semantic-ui-react";
import AddQuiz from "../quiz/AddQuiz";
const StepBar = () => {
  const [step, setStep] = useState(1);
  const handleBackStep = () => {
    setStep(step - 1);
  };
  return (
    <div>
      <Divider hidden />
      <Header as="h2" content="Add Quiz" />

      <Divider />
      <Step.Group widths={3}>
        <Step
          completed={step === 2 || step === 3 || step === 4}
          active={step === 1}
        >
          <Icon name="newspaper" />
          <Step.Content>
            <Step.Title>Info Quiz</Step.Title>
            <Step.Description>Add Quiz Details ..</Step.Description>
          </Step.Content>
        </Step>
        <Step completed={step === 3 || step === 4} active={step === 2}>
          <Icon name="tasks" />
          <Step.Content>
            <Step.Title>Quiz</Step.Title>
            <Step.Description>Add Quiz Content ..</Step.Description>
          </Step.Content>
        </Step>
        <Step active={step === 3} completed={step === 4}>
          <Icon name="info" />
          <Step.Content>
            <Step.Title>Send</Step.Title>
            <Step.Description>Confirm Your Add ..</Step.Description>
          </Step.Content>
        </Step>
      </Step.Group>
      {step === 1 ? <AddQuiz /> : ""}
      <div hidden={step < 2 || step > 3}>
        <Button disabled={step < 2} floated="left" onClick={handleBackStep}>
          Back
        </Button>
      </div>
    </div>
  );
};

export default StepBar;
