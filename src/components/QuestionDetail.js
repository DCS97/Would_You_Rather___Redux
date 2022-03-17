import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { setAuthedUser, setRoute } from "../store/actions";
import Results from "./Results";
import Poll from "./Poll";
import "../App.css";

function QuestionDetail() {
  const { pathname } = useLocation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const qid = useParams().id;
  const previousPath = useSelector((state) => state.route);
  const authedUser = useSelector((state) => state.user);
  const users = useSelector((state) => state.users);
  const questions = useSelector((state) => state.questions);

  const questionsIds = Object.keys(questions);
  let answers = authedUser ? Object.keys(users[authedUser].answers) : [];

  React.useEffect(() => {
    if (!authedUser && !questionsIds.includes(qid) && previousPath !== "/") {
      dispatch(setAuthedUser(null));
      dispatch(setRoute(pathname));
      navigate("/");
    }
    if (authedUser && previousPath === "/" && !questionsIds.includes(qid)) {
      navigate("*");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authedUser, qid, questions]);
  return (
    authedUser &&
    questionsIds.includes(qid) &&
    (answers.includes(qid) ? <Results qid={qid} /> : <Poll qid={qid} />)
  );
}

export default QuestionDetail;
