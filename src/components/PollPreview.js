import React, { useCallback } from "react";
import "../App.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function PollPreview(props) {
  const navigate = useNavigate();

  const authedUser = useSelector((state) => state.user);
  const users = useSelector((state) => state.users);
  const questions = useSelector((state) => state.questions);

  const questionsIds = Object.keys(questions);
  const user = users[authedUser];
  const answeredIds = user
    ? Object.keys(user.answers).sort((id) => questions[id].timestamp)
    : [];
  const unansweredIds = user
    ? questionsIds
        .filter((id) => !answeredIds.includes(id))
        .sort((id) => questions[id].timestamp)
    : [];

  const showQuestions = useCallback(() => {
    switch (props.tab) {
      case "unanswered":
        return unansweredIds;
      case "answered":
        return answeredIds;
      default:
        return unansweredIds;
    }
  }, [props.tab]);

  React.useEffect(() => {
    if (!authedUser) {
      navigate("/");
    }
  }, [authedUser]);

  return (
    <div className="poll-container">
      {showQuestions().map((id) => (
        <div className="poll-preview-container" key={id}>
          <img
            className="user-avatar"
            src={users[questions[id].author].avatarURL}
            alt={questions[id].author}
          />
          <span className="title-small">
            {`${users[questions[id].author].name} asks:`}{" "}
          </span>
          <div className="question-container">
            <label className="subtitle-small">{`Would you rather... `}</label>
            <label className="subtitle-small">
              {`....${questions[id].optionOne.text}`}
            </label>
          </div>
          <button
            className="view-poll"
            onClick={() => navigate(`/questions/${id}`, { id: id })}
          >
            View Poll
          </button>
        </div>
      ))}
    </div>
  );
}

export default PollPreview;
