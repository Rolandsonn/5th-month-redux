import { useSelector } from "react-redux";
import Form from "./components/Form";
import "./App.css";
function App() {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <>
      <div className="wrapper">
        <Form />
        <div className="inner">
          <h2>Name: {user.name}</h2>
          <p>Age: {user.age}</p>
          <p>Gender: {user.gender}</p>
        </div>
      </div>
    </>
  );
}

export default App;
