import styles from "./Form.module.css";
import { useDispatch } from "react-redux";
const Form = () => {
  const dispatch = useDispatch();

  const changeUser = (e) => {
    if (e.target.name === "name") {
      dispatch({ type: "CHANGE_NAME", payload: e.target.value });
    } else if (e.target.name === "age") {
      dispatch({ type: "CHANGE_AGE", payload: e.target.value });
    } else {
      dispatch({ type: "CHANGE_GENDER", payload: e.target.value });
    }
  };

  return (
    <>
      <form className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          onChange={changeUser}
        />
        <input
          type="number"
          name="age"
          placeholder="Enter age"
          onChange={changeUser}
        />
        <select name="gender" onChange={changeUser}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </form>
    </>
  );
};

export default Form;
