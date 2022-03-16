import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Leaderboard from "./components/Leaderboard";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import NewQuestion from "./components/NewQuestion";
import PageNotFound from "./components/PageNotFound";
import QuestionDetail from "./components/QuestionDetail";
import { handleInitialData, setLogin } from "./store/actions";

function App() {
  const state = useSelector((state) => state);
  console.log("state: ", state);
  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();
  useEffect(() => {
    if (login) {
      dispatch(handleInitialData());
      dispatch(setLogin(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [login]);

  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/add" element={<NewQuestion />} />
        <Route exact path="/leaderboard" element={<Leaderboard />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/questions/:id" element={<QuestionDetail />} />
        <Route element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
