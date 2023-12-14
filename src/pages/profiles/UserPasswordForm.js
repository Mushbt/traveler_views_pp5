import React, { useEffect, useState } from "react";

import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";

import { axiosRes } from "../../api/axiosDefaults";
import appStyles from "../../App.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";


const UserPasswordForm = () => {
    const history = useHistory();
    const { id } = useParams();
    const currentUser = useCurrentUser();

    const [userData, setUserData] = useState({
        new_password1: "",
        new_password2: "",
    });
    const { new_password1, new_password2 } = userData;
    const [errors, setErrors] = useState({});
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);

    /* 
     Handles changes to the input fields
    */
    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        });
    };

    /*
     Handles the edit of user password
    */
    useEffect(() => {
        if (currentUser?.profile_id?.toString() !== id) {
            history.push("/");
        }
    }, [currentUser, history, id]);

    /* 
     Handles the new password submission
     Displays a feedback message to the user on successful password change
     Redirects the user to the profile page after a short delay
    */
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axiosRes.post("/dj-rest-auth/password/change/", userData);
            setShowSuccessAlert(true);

            // Redirect after 5 seconds
            setTimeout(() => {
                history.goBack();
            }, 5000);
        } catch (err) {
            // console.error(err);
            setErrors(err.response?.data);
            setShowErrorAlert(true);
        }
    };

    return (
        <Row>
            <Col className="py-2 mx-auto text-center" md={8}>
                <Container className={appStyles.Content}>
                    {showSuccessAlert && (
                        <Alert
                            variant="success"
                            onClose={() => setShowSuccessAlert(false)}
                            dismissible
                        >
                            Password changed successfully!
                        </Alert>
                    )}
                    {showErrorAlert && (
                        <Alert
                            variant="danger"
                            onClose={() => setShowErrorAlert(false)}
                            dismissible
                        >
                            Failed to change password. Please try again.
                        </Alert>
                    )}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>New password</Form.Label>
                            <Form.Control
                                placeholder="Type your new password"
                                type="password"
                                value={new_password1}
                                onChange={handleChange}
                                name="new_password1"
                                className={`${appStyles.Input} text-center`}
                            />
                        </Form.Group>
                        {errors?.new_password1?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}
                        <Form.Group>
                            <Form.Label>Confirm password</Form.Label>
                            <Form.Control
                                placeholder="Confirm new password"
                                type="password"
                                value={new_password2}
                                onChange={handleChange}
                                name="new_password2"
                                className={`${appStyles.Input} text-center`}
                            />
                        </Form.Group>
                        {errors?.new_password2?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}
                        <Button
                            type="submit"
                            className={`mx-2 my-2 ${appStyles.button}`}
                            onMouseDown={(event) => event.preventDefault()}
                        >
                            Save
                        </Button>
                        <Button
                            onMouseDown={(event) => event.preventDefault()}
                            className={`mx-2 ${appStyles.button}`}
                            onClick={() => history.goBack()}>
                            Cancel
                        </Button>
                    </Form>
                </Container>
            </Col>
        </Row>
    );
};

export default UserPasswordForm;
