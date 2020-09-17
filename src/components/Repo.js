import React from "react";
import { useSelector } from "react-redux";
import { getRepository } from "../actions";

const Repo = () => {
  const userUrl = useSelector((state) => state.userUrl);
  const dataRes = useSelector((state) => state.getRepository);

  return (
    <div className="ui card">
      <div className="content">
        <div className="header">Repo Name</div>
      </div>
      <div className="content">
        <p>description</p>
      </div>
      <div className="extra content">
        <button className="ui button">Open in new tab</button>
      </div>
    </div>
  );
};

export default Repo;
