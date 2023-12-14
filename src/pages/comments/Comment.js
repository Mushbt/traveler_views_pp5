import React, { useState } from "react";

import { Media, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

import CommentEditForm from "./CommentEditForm";
import { axiosRes } from "../../api/axiosDefaults";
import Avatar from "../../components/Avatar";
import { DropdownMenu } from "../../components/DropdownMenu";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/Comment.module.css";

const Comment = (props) => {
  const {
    profile_id,
    profile_image,
    owner,
    updated_on,
    content,
    id,
    setPost,
    setComments,
  } = props;

  const [showEditForm, setShowEditForm] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  /*
    Handles deleting of the comment based on its id
    Removes the comment from all comments
    Displays a feedback message to user
    Decrements the number of current comments by 1
  */
  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/comments/${id}/`);
      setPost((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            comments_number: prevPost.results[0].comments_number - 1,
          },
        ],
      }));
      setShowSuccessAlert(true);
      setTimeout(() => {
        setShowSuccessAlert(false);
        setComments((prevComments) => ({
          ...prevComments,
          results: prevComments.results.filter((comment) => comment.id !== id),
        }));
      }, 5000); // Timeout of 5 seconds before Alert disappears

    } catch (err) {
      // console.error(err);
      setShowErrorAlert(true);
      setTimeout(() => {
        setShowErrorAlert(false);
      }, 5000); // Timeout of 5 seconds before Alert disappears
    }
  };

  return (
    <div>
      <Media>
        <Link to={`/profiles/${profile_id}`} className="my-3">
          <Avatar src={profile_image} />
        </Link>
        <Media.Body className="align-self-center mb-4">
          <div className={styles.CommentBox}>
            <span className={styles.OwnerName}>{owner}</span>
            <span className={styles.Date}> | {updated_on}</span>
            <span className={styles.DropdownDots}>
              {/* Display the dropdown menu for owner of the comment
                  with options to edit or delete it */}
              {is_owner && !showEditForm && (
                <DropdownMenu handleEdit={() => setShowEditForm(true)} handleDelete={handleDelete} />
              )}
            </span>
            {showEditForm ? (
              <CommentEditForm
                id={id}
                profile_id={profile_id}
                content={content}
                profileImage={profile_image}
                setComments={setComments}
                setShowEditForm={setShowEditForm}
              />
            ) : (
              <p className="pr-2 pt-2">{content}</p>
            )}
            {/* Display success Alert for comment deleted */}
            {showSuccessAlert && (
              <Alert variant="success" onClose={() => setShowSuccessAlert(false)} dismissible>
                Comment deleted successfully!
              </Alert>
            )}
            {/* Display unsuccessfull Alert for comment not deleted */}
            {showErrorAlert && (
              <Alert variant="danger" onClose={() => setShowErrorAlert(false)} dismissible>
                Failed to delete comment. Please try again.
              </Alert>
            )}
          </div>
        </Media.Body>
      </Media>
    </div>
  );
};

export default Comment;
