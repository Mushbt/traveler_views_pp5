import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import appStyles from "../../App.module.css";
import styles from "../../styles/PostsPage.module.css";
import SecondaryNavBar from "../../components/SecondaryNavBar";


function PostsPage() {
  return (
    <Container>
      <Row>
        <Col className="py-2 p-0 p-lg-2" lg={4}>

          <SecondaryNavBar />

          <Container
            className={`${appStyles.Content} ${appStyles.CollapsedColumn} mb-3`}
          >
            Popular users
          </Container>

          <Container
            className={`${appStyles.Content} ${appStyles.CollapsedColumn} mb-3`}
          >
            Popular countries
          </Container>
        </Col>

        <Col className="py-2 p-0 p-lg-2" lg={8}>
        </Col>
      </Row>
    </Container>
  );
}

export default PostsPage;