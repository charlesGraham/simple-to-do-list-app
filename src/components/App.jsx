import React, { useState } from "react";

function App() {
  const [listItem, setListItem] = useState("");
  const [list, setList] = useState([]);

  function handleChange(event) {
    const newItem = event.target.value;
    setListItem(newItem);
  }

  function addItem() {
    setList((prevValue) => {
      return [...prevValue, listItem];
    });
    setListItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={handleChange}
          name="item"
          type="text"
          value={listItem}
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
