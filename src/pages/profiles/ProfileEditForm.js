import React, { useState, useEffect, useRef } from "react";

import { Alert, Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";

import { axiosReq } from "../../api/axiosDefaults";
import appStyles from "../../App.module.css";
import { useCurrentUser, useSetCurrentUser } from "../../contexts/CurrentUserContext";

const ProfileEditForm = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const { id } = useParams();
  const history = useHistory();
  const imageFile = useRef();

  const [profileData, setProfileData] = useState({
    name: "",
    description: "",
    image: "",
  });
  const { name, description, image } = profileData;

  const [errors, setErrors] = useState({});
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  /*
    Handles the edit of user profile
    Makes a request to the API based on profile's ID
  */
  useEffect(() => {
    const handleMount = async () => {
      if (currentUser?.profile_id?.toString() === id) {
        try {
          const { data } = await axiosReq.get(`/profiles/${id}/`);
          const { name, description, image } = data;
          setProfileData({ name, description, image });
        } catch (err) {
          // console.log(err);
          history.push("/");
        }
      } else {
        history.push("/");
      }
    };

    handleMount();
  }, [currentUser, history, id]);

  /* 
    Handles changes to the profile form input fields
  */
  const handleChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
  };

  /* 
    Handles the profile form submission
    Displays a Alert to the user on successful submission
    Redirects the user to the profile page after a short delay
  */
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);

    if (imageFile?.current?.files[0]) {
      formData.append("image", imageFile?.current?.files[0]);
    }

    try {
      const { data } = await axiosReq.put(`/profiles/${id}/`, formData);
      setCurrentUser((currentUser) => ({
        ...currentUser,
        profile_image: data.image,
      }));
      setShowSuccessAlert(true);

      setTimeout(() => {
        history.goBack();
      }, 5000);
    } catch (err) {
      // console.error(err);
      setErrors(err.response?.data);
      setShowErrorAlert(true);
    }
  };

  const textFields = (
    <>
      <Form.Group>
        <Form.Label>Profile description</Form.Label>
        <Form.Control
          as="textarea"
          value={description}
          onChange={handleChange}
          name="description"
          rows={7}
          className={appStyles.Input}
        />
      </Form.Group>

      {errors?.description?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Button
        className={`my-3 ${appStyles.button}`}
        onMouseDown={(e) => e.preventDefault()}
        type="submit"
      >
        Save
      </Button>

      <Button
        className={`mx-3 ${appStyles.button}`}
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
    </>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="d-none d-md-block p-0 p-md-2 text-center" md={8} lg={8}>
          <Container className={appStyles.Content}>
            {showSuccessAlert && (
              <Alert
                variant="success"
                onClose={() => setShowSuccessAlert(false)}
                dismissible
              >
                Profile updated successfully!
              </Alert>
            )}
            {showErrorAlert && (
              <Alert
                variant="danger"
                onClose={() => setShowErrorAlert(false)}
                dismissible
              >
                Failed to update profile. Please try again.
              </Alert>
            )}
            {textFields}
          </Container>
        </Col>
        <Col className="py-2 p-0 p-md-2 text-center" md={4} lg={4}>
          <Container className={appStyles.Content}>
            <Form.Group>
              {image && (
                <figure>
                  <Image src={image} fluid />
                </figure>
              )}

              <div>
                <Form.Label
                  className={`${appStyles.button}`}
                  htmlFor="image-upload"
                >
                  Change your picture
                </Form.Label>
              </div>
              <Form.File
                id="image-upload"
                ref={imageFile}
                accept="image/*"
                className="d-none"
                onChange={(e) => {
                  if (e.target.files.length) {
                    setProfileData({
                      ...profileData,
                      image: URL.createObjectURL(e.target.files[0]),
                    });
                  }
                }}
              />
            </Form.Group>
            {errors?.image?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
      </Row>
    </Form>
  );
};

export default ProfileEditForm;
