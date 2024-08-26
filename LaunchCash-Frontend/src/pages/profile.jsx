import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Col, Container, Row } from "react-bootstrap";
import { GiAstronautHelmet } from "react-icons/gi";
import { useUser } from "./LoginRegister/components/UserContext";
import Button from "react-bootstrap/Button";

const Profile = () => {
  const { currentUser, logout } = useUser();
  const nav = useNavigate("");

  const username = currentUser.username;
  const balance = currentUser.balance;

  const handleLogout = () => {
    logout();
    nav("/");
  };

  return (
    <Container className="my-4">
      <Row className="justify-content-center">
        <Col md={4} className="d-flex justify-content-center mb-4">
          <Card
            style={{ width: "36rem" }}
            className="text-center bg-dark text-white bg-opacity-75"
          >
            <Card.Header
              className="d-flex justify-content-center align-items-center"
              style={{
                borderRadius: "50%",
                width: "120px",
                height: "120px",
                margin: "20px auto 0",
                backgroundColor: "white",
              }}
            >
              <GiAstronautHelmet size={120} color="black" />
            </Card.Header>
            <Card.Body>
              <Card.Title className="fs-2">Hello, {username}!</Card.Title>
              <Card.Text className="fs-3">Balance: ${balance}</Card.Text>
              <Button variant="danger" className="m-2" onClick={handleLogout}>
                Logout
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
