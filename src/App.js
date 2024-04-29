import "./styles.css";
import Item from "./Item";
import { useState, useRef } from "react";

export default function App() {
  const [toDos, setToDos] = useState([]);
  //useref;
  const inputRef = useRef();
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setToDos([
        ...toDos,
        { text: e.target.value, completed: false, id: Date.now() },
      ]);
      inputRef.current.value = "";
    }
  };

  const deleteItem = function (id) {
    const filteredItems = toDos.filter((ele) => ele.id != id);
    setToDos(filteredItems);
  };
  const handleComplete = function (id) {
    const updatedList = toDos.map((ele) => {
      if (ele.id === id) {
        ele.completed = !ele.completed;
      }
      return ele;
    });
    setToDos(updatedList);
  };

  const handleEditText = (id, text) => {
    const updateText = toDos.map((ele) => {
      if (ele.id === id) {
        ele.text = text;
      }
      return ele;
    });
    setToDos(updateText);
  };
  return (
    <div className="App">
      <input type="text" onKeyPress={handleKeyPress} ref={inputRef} />
      {toDos.map((e) => (
        <Item
          {...e}
          key={e.id}
          updateCompleted={handleComplete}
          handleDelete={deleteItem}
          updateText={handleEditText}
        />
      ))}
    </div>
  );
}
