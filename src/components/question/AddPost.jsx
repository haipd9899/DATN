import React, { useState } from "react";
import { Button, Form, Input, TextArea, Segment } from "semantic-ui-react";
import { useFormik } from "formik";
import TagsInput from "react-tagsinput";
const AddPost = () => {
  const [tags, setTags] = useState([]);
  const handleChange = (tag) => {
    setTags(tag);
  };
  return (
    <div>
      <Segment raised color="red">
        <Form>
          <Form.Field
            control={TextArea}
            placeholder="whats your question?"
            label="Content"
            name="Body"
          />
          <TagsInput value={tags} onChange={handleChange} />

          <div style={{ float: "right", marginRight: "5%" }}>
            <Button
              style={{ maxHeight: "40px" }}
              type="submit"
              content="Reply"
              icon="edit"
            />
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ marginLeft: "5%" }}></div>
          </div>
        </Form>
      </Segment>
    </div>
  );
};

export default AddPost;
