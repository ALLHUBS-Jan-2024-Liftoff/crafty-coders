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
          `http://localhost:8080/api/user/${cuName}/friends/remove`
        ); // Assuming user ID is 1
        setFriends(response.data);
      } catch (err) {
        console.error("Error fetching friends:", err);
      }
    };

    fetchFriends();
  }, []);

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
            onQueryChange={setSearchQuery}
          />
        </div>
      </Tab>
    </Tabs>
  );
};

export default Friends;
