import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useUser } from "./components/UserContext";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const nav = useNavigate();
  const { register } = useUser();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      console.log(username, email, password);
      await register(username, email, password);
      nav(`/profile/${username}`);

      setMessage("Registration successful!");
    } catch (error) {
      console.error("Error with registration", error);
      setMessage("Error during registration");
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6}>
          <h2 className="text-center mb-4">Create Account</h2>
          <Form method="post" onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Control
                type="text"
                value={username}
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Register
            </Button>

            <div className="register-link">
              <p>
                Already have an account? <Link to={"/login"}>Login</Link>
              </p>
            </div>
          </Form>
          {message && <p>{message}</p>}
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
