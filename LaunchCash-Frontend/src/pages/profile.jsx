import React from "react";
import { AuthUser } from "../services/AuthService";
import { useNavigate } from "react-router-dom";
import { Card, Col, Container, Row } from "react-bootstrap";
import { GiAstronautHelmet } from "react-icons/gi";

const Profile = () => {
  const user = AuthUser();
  const navigate = useNavigate("");
  console.log(user);

  const username = user.username;

  const balance = user.balance;
  console.log(username);

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    // <>
    //   <div className="hello-user">
    //     <h1>Hello, {username}!</h1>
    //   </div>
    //   <div>
    //     <h2>Balance: ${balance}</h2>
    //   </div>
    //   <div>
    //     <button onClick={logout}>Logout</button>
    //   </div>
    // </>

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
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
