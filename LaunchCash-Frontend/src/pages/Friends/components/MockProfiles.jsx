import React from "react";

const MockProfiles = (mockUser) => {
  return (
    <Container className="my-4">
      <Row className="justify-content-center">
        {filteredUsers.map((mockUser) => (
          <Col
            md={4}
            key={mockUser.username}
            className="d-flex justify-content-center mb-4"
          >
            <Card
              style={{ width: "18rem" }}
              className="text-center bg-dark text-white bg-opacity-75"
            >
              <Card.Img
                variant="top"
                src={mockUser.avatarUrl}
                style={{
                  borderRadius: "50%",
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                  margin: "20px auto 0",
                }}
              />
              <Card.Body>
                <Card.Title>{mockUser.username}</Card.Title>
                <Card.Text>Email: {mockUser.email}</Card.Text>
                <div className="d-grid gap-2">
                  {mockUser.isFriend ? (
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

export default MockProfiles;
