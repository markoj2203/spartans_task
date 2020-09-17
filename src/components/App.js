import React from "react";
import Users from "./Users";
import Repo from "./Repo";

const App = () => {
  return (
    <div className="parent">
      <div className="item">
        <Users />
      </div>
      <div className="item last">
        <Repo />
      </div>
    </div>
  );
};

export default App;
