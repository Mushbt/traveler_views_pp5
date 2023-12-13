import React, { useState } from "react";

import { Card, Media, OverlayTrigger, Tooltip, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import { axiosRes } from "../../api/axiosDefaults";
import Avatar from "../../components/Avatar";
import { DropdownMenu } from "../../components/DropdownMenu";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/Post.module.css";

const Post = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    title,
    description,
    country,
    comments_number,
    likes_number,
    like_id,
    image,
    updated_on,
    postPage,
    setPosts,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  /*
    Handles editing of the post
  */
  const handleEdit = () => {
    history.push(`/posts/${id}/edit`);
  };

  /*
    Handles deleting of the post
    Shows success Alert to the user
    Redirects the user to main page
  */
  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/posts/${id}/`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.filter((post) => post.id !== id),
      }));
      setShowSuccessAlert(true);
      setTimeout(() => {
        setShowSuccessAlert(false);
        if (postPage) {
          history.push("/");
        }
      }, 5000); // Timeout of 5 seconds before Alert disappears
    } catch (err) {
      // console.log(err);
      setShowErrorAlert(true);
      setTimeout(() => {
        setShowErrorAlert(false);
      }, 5000); // Timeout of 5 seconds before Alert disappears
    }
  };

  /*
    Handles likes of posts
    Sends a request to the API for a post with a specific id
    Increments the likes number by 1
  */
  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/likes/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_number: post.likes_number + 1, like_id: data.id }
            : post;
        }),
      }));
    } catch (err) {
      // console.log(err);
    }
  };

  /*
    Handles unliking of the post
    Sends a request to the API for a post with a specific id
    Decrements the likes number by 1
  */
  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/likes/${like_id}/`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_number: post.likes_number - 1, like_id: null }
            : post;
        }),
      }));
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <Card className={styles.Post}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={50} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_on}</span>
            {/* Display dropdown menu for owner of the post with options to edit or delete */}
            {is_owner && postPage &&
              <DropdownMenu handleEdit={handleEdit} handleDelete={handleDelete} />}
          </div>
        </Media>
      </Card.Body>

      <Link to={`/posts/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      
      <Card.Body>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {description && <Card.Text>{description}</Card.Text>}
        {country && <Card.Text>{country}</Card.Text>}
        <hr className={styles.Line} />
        <div className={styles.PostBar}>
          {is_owner ? (
            // Users cannot like their own posts
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can&lsquo;t like your own post!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          ) : like_id ? (
            <span onClick={handleUnlike}>
              <i className="fas fa-heart" />
            </span>
          ) : currentUser ? (
            <span onClick={handleLike}>
              <i className="far fa-heart" />
            </span>
          ) : (
            // Logged out users cannot like posts
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to like posts!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          )}

          {likes_number}
          <Link to={`/posts/${id}`}>
            <i className="far fa-comments" />
          </Link>
          {comments_number}
        </div>
        {showSuccessAlert && (
          // Success Alert for deleting Post
          <Alert variant="success" onClose={() => setShowSuccessAlert(false)} dismissible>
            Post deleted successfully!
          </Alert>
        )}
        {showErrorAlert && (
          // Unsuccessful Alert for deleting Post
          <Alert variant="danger" onClose={() => setShowErrorAlert(false)} dismissible>
            Failed to delete post. Please try again.
          </Alert>
        )}
      </Card.Body>
    </Card>
  );
};

export default Post;
