import React, { useEffect, useState } from "react";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleSaveQuestion } from "../store/actions";

function NewQuestion(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const authedUser = useSelector((state) => state.user);

  const [option1, setOption1] = useState();
  const [option2, setOption2] = useState();

  useEffect(() => {
    if (!authedUser) {
      navigate("/");
    }
  }, [authedUser]);

  const handleSubmit = () => {
    dispatch(handleSaveQuestion(option1, option2, authedUser));
  };

  return (
    <div className="container">
      <div className="question-container">
        <h1 className="title">Create new question: </h1>
      </div>
      <form>
        <label className="label-title">
          Would you rather...
          <li>
            <input
              name="option1"
              type="text"
              placeholder="Enter an option here"
              onChange={(event) => setOption1(event.target.value)}
            />
          </li>
          <label className="label-item">OR</label>
          <li>
            <input
              name="option2"
              type="text"
              placeholder="Enter an option here"
              onChange={(event) => setOption2(event.target.value)}
            />
          </li>
        </label>
      </form>
      <button className="confirmation" onClick={handleSubmit}>
        SUBMIT
      </button>
    </div>
  );
}

export default NewQuestion;
