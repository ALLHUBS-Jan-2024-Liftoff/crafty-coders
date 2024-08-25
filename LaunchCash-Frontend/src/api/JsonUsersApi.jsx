import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { useUser } from "../pages/LoginRegister/components/UserContext";

const JsonUserApi = ({
  searchQuery,
  handleAddFriend,
  handleRemoveFriend,
  friends,
}) => {
  const [users, setUsers] = useState([]);
  const currentUser = useUser();
  const cuName = currentUser.username;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        const userList = response.data;
        console.log(userList);

        const transformedUsers = userList.map((user) => {
          let id = user.id;
          const gender = Math.random() > 0.5 ? "male" : "female";
          const avatarUrl = `https://xsgames.co/randomusers/avatar.php?g=${gender}&${id}`;

          return {
            id: id,
            username: user.username,
            email: user.email,
            avatar: avatarUrl,
            isFriend: savedFriends.some((friend) => friend.id === user.id),
          };
        });

        setUsers(transformedUsers);
        setFriends(savedFriends);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };

    fetchUsers();
  }, []);

  const makeFriends = users.map(async (user) => {
    const postMockUsers = await axios.post(
      "http://localhost:8080/api/mockUsers",
      {
        user,
      }
    );
  });

  const filteredUsers = users.filter(
    (user) =>
      user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!searchQuery) {
    return null;
  }

  return (
    <Container className="my-4">
      <Row className="justify-content-center">
        {filteredUsers.map((user) => (
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
                  {user.isFriend ? (
                    <Button
                      variant="danger"
                      className="m-2"
                      onClick={handleRemoveFriend}
                    >
                      Remove Friend
                    </Button>
                  ) : (
                    <Button
                      variant="primary"
                      className="m-2"
                      onClick={handleAddFriend}
                    >
                      Add Friend
                    </Button>
                  )}
                  <div className="d-block">
                    <Button
                      variant="success"
                      className="m-2"
                      style={{ padding: "0.375rem 2.75rem" }}
                    >
                      <GiPayMoney size={20} />
                    </Button>
                    <Button
                      variant="success"
                      className="m-2"
                      style={{ padding: "0.375rem 2.75rem" }}
                    >
                      <GiReceiveMoney size={20} />
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
