import React, { useEffect, useState } from "react";
import "../App.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import PollPreview from "./PollPreview";

function Home() {
  const navigate = useNavigate();
  const users = useSelector((state) => state.users);
  const authedUser = useSelector((state) => state.user);
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

  const [tab, setTab] = useState(
    unansweredIds.length > 0 ? "unanswered" : "answered"
  );

  useEffect(() => {
    if (!authedUser) {
      navigate("/");
    }
  }, [authedUser]);

  return (
    <div className="nav">
      <ul className="switch">
        <li
          onClick={() => setTab("unanswered")}
          className={
            tab === "unanswered" ? "switch-item-active" : "switch-item"
          }
        >
          <span>Unanswered Questions</span>
        </li>

        <li
          className={tab === "answered" ? "switch-item-active" : "switch-item"}
          onClick={() => setTab("answered")}
        >
          <span>Answered Questions</span>
        </li>
      </ul>
      <PollPreview tab={tab} />
    </div>
  );
}

export default Home;
