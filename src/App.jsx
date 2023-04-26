import { useSelector } from "react-redux";
import Form from "./components/Form";
import "./App.css";
function App() {
  const { name, age, gender } = useSelector((state) => state);

  return (
    <>
      <div className="wrapper">
        <Form />
        <div className="inner">
          <h2>Name: {name}</h2>
          <p>Age: {age}</p>
          <p>Gender: {gender}</p>
        </div>
      </div>
    </>
  );
}

export default App;
