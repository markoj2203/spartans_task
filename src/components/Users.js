import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getRepository, getUserUrl } from "../actions";

const Users = () => {
  const [dataRes, setDataRes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    async function getUserData() {
      const result = await axios
        .get("https://api.github.com/gists/public")
        .then(function (response) {
          setDataRes(response.data);
          setSearchResults(response.data);
        });
    }
    getUserData();
  }, []);

  useEffect(() => {
    const resData = dataRes.filter((data) =>
      data.owner.login.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(resData);
  }, [searchTerm]);

  const handleClick = (repos_url) => {
    dispatch(getRepository(repos_url));
    dispatch(getUserUrl(repos_url));
  };

  return (
    <div>
      <div className="ui category search">
        <div className="ui icon input">
          <input
            className="prompt"
            type="text"
            placeholder="Search Users..."
            value={searchTerm}
            onChange={handleChange}
          />
          <i className="search icon"></i>
        </div>
        <div className="results"></div>
      </div>
      <div className="ui items">
        {searchResults.map((data) => (
          <div
            onClick={() => handleClick(data.owner.repos_url)}
            key={data.id}
            className="item"
          >
            <a className="ui tiny image">
              <img src={data.owner.avatar_url} />
            </a>
            <div className="content">
              <a className="header">{data.owner.login}</a>
              <div className="description">
                <p>{data.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
