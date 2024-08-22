import React, { useEffect, useState } from "react";
import axios from "axios";
import { AuthUser } from "../services/AuthService";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";

const JsonUserApi = ({ searchQuery }) => {
  const [users, setUsers] = useState([]);
  const [friends, setFriends] = useState([]);
  const currentUser = AuthUser();
  const cuName = currentUser.username;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const [userResponse, friendResponse] = await Promise.all([
          axios.get("https://jsonplaceholder.typicode.com/users"),
          axios.get("http://localhost:8080/api/mockUsers/return"),
        ]);
        const userList = userResponse.data;
        const savedFriends = friendResponse.data;
        console.log(userList);
        console.log(savedFriends);

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

  const addFriend = async (user) => {
    try {
      await axios.post(`http://localhost:8080/api/user/${cuName}/friends/add`, {
        user,
      });
      setFriends([...friends, user]);
      setUsers(
        users.map((u) => (u.id === user.id ? { ...u, isFriend: true } : u))
      );
    } catch (err) {
      console.error("Error adding friend:", err);
    }
  };

  const removeFriend = async (user) => {
    try {
      await axios.delete(
        `http://localhost:8080/api/user/${cuName}/friends/remove`
      );
      setFriends(friends.filter((friend) => friend.id !== user.id));
      setUsers(
        users.map((u) => (u.id === user.id ? { ...u, isFriend: false } : u))
      );
    } catch (err) {
      console.error("Error removing friend:", err);
    }
  };

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
                      onClick={() => removeFriend(user)}
                    >
                      Remove Friend
                    </Button>
                  ) : (
                    <Button variant="primary" className="m-2">
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
