import React, { useState } from "react";
import JsonUserApi from "../../api/JsonUsersApi";
import { Tabs, Tab } from "react-bootstrap";
import SearchBar from "../../components/SearchBar";
import "./assets/Friends.css";

const Friends = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [friends, setFriends] = useState([]);
  const currentUser = AuthUser();
  const cuName = currentUser.username;

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/user/${cuName}/friends/get`
        );
        setFriends(response.data);
      } catch (err) {
        console.error("Error fetching friends:", err);
      }
    };

    fetchFriends();
  }, []);

  const handleAddFriend = async (friend) => {
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

  const handleRemoveFriend = async (user) => {
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

  return (
    <Tabs
      defaultActiveKey="friends"
      id="uncontrolled-tab-example"
      className="tabs mb-3 mt-3 justify-content-center"
    >
      <Tab eventKey="friends" title="My Friends">
        show friends
      </Tab>
      <Tab eventKey="suggestions" title="Find Friends">
        <div>
          <SearchBar query={searchQuery} onQueryChange={setSearchQuery} />
          <JsonUserApi
            searchQuery={searchQuery}
            handleAddFriend={handleAddFriend}
            friends={friends}
          />
        </div>
      </Tab>
    </Tabs>
  );
};

export default Friends;
