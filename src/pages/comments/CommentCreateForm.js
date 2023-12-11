import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, InputGroup } from "react-bootstrap";
import styles from "../../styles/CommentCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import AlertMessage from '../../components/AlertMessage';

function CommentCreateForm(props) {
  const { post, setPost, setComments, profileImage, profile_id } = props;
  const [content, setContent] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertVariant, setAlertVariant] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const showAlertMessage = (variant, message) => {
    setAlertVariant(variant);
    setAlertMessage(message);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

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
      showAlertMessage('success', 'Comment added successfully!');
    } catch (err) {
      console.log(err);
      showAlertMessage('danger', 'Failed to add comment. Please try again.');
    }
  };

  return (
    <Form className="mt-2 text-center" onSubmit={handleSubmit}>
      {showAlert && (
        <AlertMessage
          variant={alertVariant}
          message={alertMessage}
          onClose={() => setShowAlert(false)}
        />
      )}

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
