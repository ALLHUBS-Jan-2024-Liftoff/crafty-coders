import React from "react";
import JsonUserApi from "../api/JsonUsersApi";
import { Tabs, Tab } from "react-bootstrap";
//import { SearchBar } from '../components/SearchBar';

const Friends = () => {
  return (
    <Tabs
      defaultActiveKey="friends"
      id="uncontrolled-tab-example"
      className="mb-3 mt-3 justify-content-center"
    >
      <Tab eventKey="friends" title="My Friends">
        show friends
      </Tab>
      <Tab eventKey="suggestions" title="Find Friends">
        <div>
          <JsonUserApi />
        </div>
      </Tab>
    </Tabs>
  );
};

export default Friends;
