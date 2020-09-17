import React, { useEffect, useState } from "react";
import axios from "axios";

// Action creator
export const getUsers = (data) => {
  // Return an action
  return {
    type: "GET_USERS",
    payload: data,
  };
};

export const getRepository = (user_repos) => {
  return function (dispatch) {
    axios.get(user_repos).then((response) => {
      dispatch({
        type: "GET_REPOSITORY",
        payload: response.data,
      });
    });
  };
};

export const getUserUrl = (user_repos) => {
  return function (dispatch) {
    dispatch({
      type: "GET_USER_URL",
      payload: user_repos,
    });
  };
};
