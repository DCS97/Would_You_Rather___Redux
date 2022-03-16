import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { handleAnswer } from "../store/actions";

function Poll(props) {
  const dispatch = useDispatch();

  const qid = props.qid;
  const questions = useSelector((state) => state.questions);
  const authedUser = useSelector((state) => state.user);
  const users = useSelector((state) => state.users);

  const [answer, setAnswer] = React.useState();

  const handleCheck = (value) => {
    setAnswer(value);
  };

  const handleConfirmation = () => {
    dispatch(handleAnswer(qid, answer, authedUser));
  };

  return (
    <div className="container">
      <div className="title-container">
        <img
          className="user-avatar"
          src={users[questions[qid].author].avatarURL}
          alt={questions[qid].author}
        />
        <h1 className="title">
          {`${users[questions[qid].author].name} asks:`}
        </h1>
      </div>
      <div className="question-container" style={{ marginTop: "50px" }}>
        <form>
          <label className="label-title">
            Would you rather...
            <li style={{ marginTop: "10px" }}>
              <label className="label-item">
                {`... ${questions[qid].optionOne.text}`}
                <input
                  value="optionOne"
                  name="option1"
                  type="checkbox"
                  checked={answer === "optionOne"}
                  onChange={(event) => handleCheck(event.target.value)}
                />
              </label>
            </li>
            <li>
              <label className="label-item">
                {`... ${questions[qid].optionTwo.text}`}
                <input
                  value="optionTwo"
                  name="option2"
                  type="checkbox"
                  checked={answer === "optionTwo"}
                  onChange={(event) => handleCheck(event.target.value)}
                />
              </label>
            </li>
          </label>
        </form>
      </div>
      <button className="confirmation" onClick={handleConfirmation}>
        CONFIRM
      </button>
    </div>
  );
}

export default Poll;
