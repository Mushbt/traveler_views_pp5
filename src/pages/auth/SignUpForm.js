import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "../../styles/LogInSignUpForm.module.css";
import { Alert, Form, Button, Col, Row, Container } from "react-bootstrap";
import appStyles from "../../App.module.css";
import axios from "axios";
import { useRedirect } from "../../hooks/useRedirect";

const SignUpForm = () => {
    useRedirect("loggedIn");
    const [signUpData, setSignUpData] = useState({
        username: "",
        password1: "",
        password2: "",
    });
    const { username, password1, password2 } = signUpData;

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    const history = useHistory();

    const handleChange = (e) => {
        setSignUpData({
            ...signUpData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/dj-rest-auth/registration/", signUpData);
            setSuccess(true);
            setErrors({});
            setTimeout(() => {
                history.push("/login");
            }, 2000);
        } catch (err) {
            setErrors(err.response?.data);
            setSuccess(false);
        }
    };

    return (
        <Row className="text-center">
            <Col className="my-auto offset-md-2" md={8}>
                <Container className={`${appStyles.Content} p-4 `}>
                    <h1 className="mb-4">Sign up</h1>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="username">
                            <Form.Text id="passwordHelpBlock" muted>
                                Your username must be in between 1-10 characters.
                            </Form.Text>
                            <Form.Label className="d-none">Username</Form.Label>
                            <Form.Control
                                className={appStyles.Input}
                                type="text"
                                placeholder="Your username"
                                name="username"
                                maxLength="10"
                                value={username}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="password1">
                            <Form.Text id="passwordHelpBlock" muted>
                                Your password must be a minimum of 8 characters.
                            </Form.Text>
                            <Form.Label className="d-none">Password</Form.Label>
                            <Form.Control
                                className={appStyles.Input}
                                type="password"
                                placeholder="Password"
                                name="password1"
                                minLength="8"
                                value={password1}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="password2">
                            <Form.Label className="d-none">Confirm password</Form.Label>
                            <Form.Control
                                className={appStyles.Input}
                                type="password"
                                placeholder="Confirm password"
                                name="password2"
                                value={password2}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Button className={`my-3 ${appStyles.button}`} type="submit" onMouseDown={(e) => e.preventDefault()}>
                            Sign up!
                        </Button>

                        {success && (
                            <Alert variant="success" className="alert">
                                <strong>Sign up successful!</strong> Redirecting to login...
                            </Alert>
                        )}

                        {errors.non_field_errors?.map((message, idx) => (
                            <Alert variant="warning" className={appStyles.Alert} key={idx}>
                                {message}
                            </Alert>
                        ))}

                        <Link className={styles.Link} to="/login">
                            Already a member? Click <span>here </span>to log in.
                        </Link>
                    </Form>
                </Container>
            </Col>
        </Row>
    );
};

export default SignUpForm;