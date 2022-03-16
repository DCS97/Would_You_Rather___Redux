import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setAuthedUser } from "../store/actions";
import "../App.css";

function NavBar() {
  const dispatch = useDispatch();
  const authedUser = useSelector((state) => state.user);

  const handleLogout = () => {
    if (authedUser) {
      dispatch(setAuthedUser(null));
    }
  };

  return (
    <div className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/add">New Question</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/leaderboard">Leaderboard</NavLink>
        </li>

        <li className="logout">
          <NavLink to="/" onClick={() => handleLogout()}>
            {authedUser ? "Log out" : "Log in"}{" "}
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
