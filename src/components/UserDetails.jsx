import React from "react";
import { useState, useEffect } from "react";
import "./User.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetails } from "./Redux/User/Actiontype";
//import store from "../components/Redux/Store";

const UserDetails = () => {
  const dispatch = useDispatch();
  //let [state, setState] = useState({});
  const stateValue = useSelector((state) => {
    return state;
  });
  const [name, setName] = useState("");
  let NameHandler = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  useEffect(() => {
    dispatch(fetchDetails(name));
  }, [name]);
  // const data = JSON.parse(stateValue);
  console.log(stateValue);
  return (
    <div className="Collector">
      {/* {<pre>{JSON.stringify(stateValue).data}</pre>} */}
      <hr />

      <AccountCircleIcon />
      <input type="text" onChange={NameHandler} />
      <br />
      <br />

      {/* {Object.keys(stateValue).length > 0 ? (
        <>
          <ul>
            <li>{stateValue.login}</li>
          </ul>
        </>
      ) : null} */}
    </div>
  );
};

export default UserDetails;
