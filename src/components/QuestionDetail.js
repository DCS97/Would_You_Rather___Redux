import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Results from "./Results";
import Poll from "./Poll";
import "../App.css";

function QuestionDetail() {
  const navigate = useNavigate();

  const qid = useParams().id;
  const authedUser = useSelector((state) => state.user);
  const users = useSelector((state) => state.users);
  let answers = authedUser ? Object.keys(users[authedUser].answers) : [];

  React.useEffect(() => {
    if (!authedUser) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authedUser]);
  return (
    authedUser &&
    (answers.includes(qid) ? <Results qid={qid} /> : <Poll qid={qid} />)
  );
}

export default QuestionDetail;
