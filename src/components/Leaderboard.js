import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";
import { setRoute } from "../store/actions";

function Leaderboard(props) {
  const { pathname } = useLocation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const authedUser = useSelector((state) => state.user);
  const users = useSelector((state) => state.users);

  const usersIds = Object.keys(users);

  useEffect(() => {
    if (!authedUser) {
      navigate("/");
      dispatch(setRoute(pathname));
    }
  }, [authedUser]);

  return (
    <div className="container">
      {usersIds.map((id) => (
        <div className="leaderboard-item-container" key={id}>
          <img className="user-avatar" src={users[id].avatarURL} alt={id} />
          <div className="leaderboard-main-info-container">
            <span className="title-leaderboard-item">{users[id].name}</span>
            <span className="title-leaderboard-item">
              {`Score: ${
                Object.keys(users[id].answers).length +
                users[id].questions.length
              }`}
            </span>
          </div>
          <div className="question-container">
            <li>
              {`Answered questions: ${Object.keys(users[id].answers).length}`}
            </li>
            <li>{`Created questions: ${users[id].questions.length}`} </li>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Leaderboard;
