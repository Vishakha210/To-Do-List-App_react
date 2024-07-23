import React, { useState } from "react";
import List from "./List";

function App() {
  const [item, SetAddItem] = useState("");
  const [array, setArray] = useState([]);

  function AddItem(e) {
    // console.log(e.target.value);
    let i = e.target.value;
    SetAddItem(i);
  }
  function Click() {
    setArray((prevArray) => [...prevArray, item]);
    // console.log(array);
    SetAddItem("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={AddItem} type="text" value={item} />
        <button onClick={Click}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <List array={array} />
      </div>
    </div>
  );
}

export default App;
