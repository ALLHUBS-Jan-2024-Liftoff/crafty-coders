import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";

const JsonUserApi = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        const userList = response.data;

        let num = 0;
        const transformedUsers = userList.map((user) => {
          num += 1;
          const gender = Math.random() > 0.5 ? "male" : "female";
          const avatarUrl = `https://xsgames.co/randomusers/avatar.php?g=${gender}&${num}`;

          return {
            username: user.username,
            email: user.email,
            balance: 200,
            avatarUrl,
          };
        });

        setUsers(transformedUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <Container className="my-4">
      <Row className="justify-content-center">
        {users.map((user) => (
          <Col
            md={4}
            key={user.username}
            className="d-flex justify-content-center mb-4"
          >
            <Card
              style={{ width: "18rem" }}
              className="text-center bg-dark text-white bg-opacity-75"
            >
              <Card.Img
                variant="top"
                src={user.avatarUrl}
                style={{
                  borderRadius: "50%",
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                  margin: "20px auto 0",
                }}
              />
              <Card.Body>
                <Card.Title>{user.username}</Card.Title>
                <Card.Text>Email: {user.email}</Card.Text>
                <div className="d-grid gap-2">
                  <Button variant="primary" className="m-2">
                    Add Friend
                  </Button>
                  <div>
                    <Button variant="success" className="m-1 px-5">
                      <GiPayMoney />
                    </Button>
                    <Button variant="success" className="m-1 px-5">
                      <GiReceiveMoney />
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default JsonUserApi;
