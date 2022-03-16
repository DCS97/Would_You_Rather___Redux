import React, { useEffect } from "react";
import "../App.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Leaderboard(props) {
  const navigate = useNavigate();

  const authedUser = useSelector((state) => state.user);
  const users = useSelector((state) => state.users);

  const usersIds = Object.keys(users);

  useEffect(() => {
    if (!authedUser) {
      navigate("/");
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
