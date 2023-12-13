import React, { useState } from "react";

import { Button, Form, InputGroup, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

import { axiosRes } from "../../api/axiosDefaults";
import appStyles from "../../App.module.css";
import Avatar from "../../components/Avatar";
import styles from "../../styles/CommentCreateEditForm.module.css";

function CommentCreateForm(props) {
  const { post, setPost, setComments, profileImage, profile_id } = props;
  const [content, setContent] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  /* 
   Handles changes to the create comment input field
 */
  const handleChange = (e) => {
    setContent(e.target.value);
  };

  /* 
    Handles the submission of the comment
    Increments the number of comments by 1
  */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axiosRes.post("/comments/", {
        content,
        post,
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: [data, ...prevComments.results],
      }));
      setPost((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            comments_number: prevPost.results[0].comments_number + 1,
          },
        ],
      }));
      setContent("");
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000); // Timeout of 5 seconds before Alert disappears
    } catch (err) {
      // console.log(err);
      setShowErrorMessage(true);
      setTimeout(() => {
        setShowErrorMessage(false);
      }, 5000); // Timeout of 5 seconds before Alert disappears
    }
  };

  const successMessage = "Comment added successfully!";
  const errorMessage = "Failed to add comment. Please try again.";

  return (
    <Form className="mt-2 text-center" onSubmit={handleSubmit}>
      {showSuccessMessage && (
        <Alert variant="success">{successMessage}</Alert>
      )}
      {showErrorMessage && <Alert variant="danger">{errorMessage}</Alert>}

      <Form.Group>
        <InputGroup>
          <p className="my-2">
            <Link to={`/profiles/${profile_id}`}>
              <Avatar src={profileImage} />
            </Link>
          </p>
          <Form.Control
            className={styles.Form}
            placeholder="Enter comment here..."
            as="textarea"
            value={content}
            onChange={handleChange}
            rows={2}
          />
        </InputGroup>
      </Form.Group>

      <Button
        className={appStyles.button}
        onMouseDown={(e) => e.preventDefault()}
        type="submit"
      >
        Add
      </Button>
    </Form>
  );
}

export default CommentCreateForm;
