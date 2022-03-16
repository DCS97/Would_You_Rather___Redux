import { useSelector } from "react-redux";
function Header() {
  const authedUser = useSelector((state) => state.user);
  const users = useSelector((state) => state.users);
  return (
    <header className="App-header">
      {authedUser ? (
        <li className="user">{`Playing as ${users[authedUser].name}`}</li>
      ) : (
        <></>
      )}
      <h1>Would You Rather???</h1>
    </header>
  );
}
export default Header;
