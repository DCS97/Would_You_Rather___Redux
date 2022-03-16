import { getInitialData, saveQuestionAnswer, saveQuestion } from "../../api";

export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const GET_QUESTIONS = "GET_QUESTIONS";
export const ADD_ANSWER = "ADD_ANSWER";
export const ADD_QUESTION = "ADD_QUESTION";
export const GET_USERS = "GET_USERS";
export const ADD_USER_ANSWER = "ADD_USER_ANSWER";
export const ADD_USER_QUESTION = "ADD_USER_QUESTION";
export const SET_LOGIN = "SET_LOGIN";

export function setLogin(login) {
  return {
    type: SET_LOGIN,
    login,
  };
}
export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id,
  };
}

export function receiveQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions,
  };
}

export function questionAnswer(info) {
  return {
    type: ADD_ANSWER,
    authedUser: info.authedUser,
    qid: info.qid,
    answer: info.answer,
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function receiveUsers(users) {
  return {
    type: GET_USERS,
    users,
  };
}

export function userAnswer(info) {
  return {
    type: ADD_USER_ANSWER,
    authedUser: info.authedUser,
    qid: info.qid,
    answer: info.answer,
  };
}

export function userQuestion(question) {
  return {
    type: ADD_USER_QUESTION,
    question,
  };
}

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    });
  };
}

export function handleAnswer(qid, answer, authedUser) {
  return (dispatch) => {
    return saveQuestionAnswer({
      authedUser,
      qid,
      answer,
    }).then(() => {
      dispatch(questionAnswer({ authedUser, qid, answer }));
      dispatch(userAnswer({ authedUser, qid, answer }));
    });
  };
}

export function handleSaveQuestion(optionOneText, optionTwoText, authedUser) {
  return (dispatch) => {
    return saveQuestion({
      author: authedUser,
      optionOneText,
      optionTwoText,
    }).then((question) => {
      dispatch(addQuestion(question));
      dispatch(userQuestion(question));
    });
  };
}
