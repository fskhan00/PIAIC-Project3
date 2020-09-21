import React from "react";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <img
        src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=200"
        alt="new"
      />
      <h1>
        <strong>NAME: {props.name}</strong>
      </h1>
      <ul>
        <li>
          Hobby: <strong>{props.hobby}</strong>
        </li>
        <li>
          Education: <strong>{props.education}</strong>
        </li>
        <li>
          Gender: <strong>{props.gender}</strong>
        </li>
      </ul>
    </div>
  );
}

export default App;
