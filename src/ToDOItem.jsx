import React, { useState } from "react";

function ToDoItem(props) {
  const [isMarked, setIsMarked] = useState(false);

  function handleClick() {
    setIsMarked((prevState) => {
      return !prevState;
    });
  }
  return (
    <div>
      <ul onClick={handleClick}>
        <li style={{ textDecoration: isMarked ? "line-through" : "none" }}>
          {props.text}
        </li>
      </ul>
    </div>
  );
}
export default ToDoItem;
