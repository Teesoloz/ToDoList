import { useState } from "react";
import "./styles.css";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newText = event.target.value;
    setInputText(newText);
  }

  function addItems() {
    setItems((prevState) => {
      return [...prevState, inputText];
    });
    setInputText("");
  }
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <div>
        <input onChange={handleChange} value={inputText} type="text" />
      </div>
      <div>
        <button onClick={addItems}>Add</button>
      </div>
      {items.map((item) => {
        return (
          <ul>
            <li>{item}</li>
          </ul>
        );
      })}
    </div>
  );
}
