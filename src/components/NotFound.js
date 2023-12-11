import React from 'react'
import NotFound from '../assets/404_error.png'
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import appStyles from "../App.module.css";
import { Link } from "react-router-dom";


const PageNotFound = () => {
    return (
        <Row>
            <Col className="py-2 mx-auto text-center" md={8}>
                <Container className={appStyles.Content}>
                    <Image className={`${appStyles.Image} img-fluid`} src={NotFound} alt="Page not found image" />
                    <h3 className="my-3">This page has not been found</h3>

                    <Link to="/">
                        <Button className={`${appStyles.button} my-3`}>
                            Go back to the main page
                        </Button>
                    </Link>
                </Container>
            </Col>
        </Row>
    );
};

export default PageNotFound;