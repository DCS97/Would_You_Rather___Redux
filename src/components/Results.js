import React from "react";
import { useSelector } from "react-redux";
import "../App.css";
import ProgressBar from "./ProgressBar";

function Results(props) {
  const qid = props.qid;
  const questions = useSelector((state) => state.questions);
  const authedUser = useSelector((state) => state.user);
  const users = useSelector((state) => state.users);
  const votesOption1 = questions[qid].optionOne.votes.length;
  const votesOption2 = questions[qid].optionTwo.votes.length;
  const percentageOption1 = parseInt(
    (votesOption1 / (votesOption1 + votesOption2)) * 100
  );
  const percentageOption2 = parseInt(
    (votesOption2 / (votesOption1 + votesOption2)) * 100
  );

  const answer = users[authedUser].answers[qid];

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
        <label className="label-title">
          Would you rather...
          <li
            style={{ marginTop: "30px", marginBottom: "30px" }}
            value={"optionOne"}
          >
            <label className="label-item">
              {`...${questions[qid].optionOne.text}`}
            </label>
            <ProgressBar bgcolor={"limegreen"} completed={percentageOption1} />
            <label className="label-info" style={{ color: " limegreen" }}>
              {`(${votesOption1} out of ${votesOption1 + votesOption2})`}
            </label>
          </li>
          <li value={"optionTwo"}>
            <label className="label-item">
              {`...${questions[qid].optionTwo.text}`}
            </label>
            <ProgressBar bgcolor={"blue"} completed={percentageOption2} />
            <label className="label-info" style={{ color: "blue" }}>
              {`(${votesOption2} out of ${votesOption1 + votesOption2})`}
            </label>
          </li>
        </label>
      </div>
      <div
        className="question-container"
        style={{ marginTop: "30px", alignItems: "center" }}
      >
        <span className="title">{`Your answer:  `}</span>
        <span
          className="title-right"
          style={{ color: "firebrick", marginTop: "10px" }}
        >{`...${questions[qid][answer].text}`}</span>
      </div>
    </div>
  );
}

export default Results;
