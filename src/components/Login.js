import React, { useEffect } from "react";
import "../App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setAuthedUser } from "../store/actions";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const authedUser = useSelector((state) => state.user);

  const handleClick = (userId) => {
    dispatch(setAuthedUser(userId));
  };
  useEffect(() => {
    if (authedUser) {
      navigate("/home");
    }
  }, [authedUser]);

  return (
    <div className="login">
      <li className="welcome">Welcome to the Would You Rather App</li>
      <li className="info">Please sign in to continue</li>
      <li className="login-title">Sign In</li>
      {Object.keys(users).map((userId) => (
        <div className="login-item" key={userId}>
          <img
            className="mini-avatar"
            src={users[userId].avatarURL}
            alt={users[userId].id}
          />

          <button
            className="sign-in"
            key={userId}
            value={userId}
            onClick={(event) => handleClick(event.target.value)}
          >{` Sign in as ${users[userId].name}`}</button>
        </div>
      ))}
    </div>
  );
}

export default Login;
