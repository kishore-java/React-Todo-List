import { useState } from "react";
const Item = ({
  text,
  completed,
  updateCompleted,
  id,
  handleDelete,
  updateText,
}) => {
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState(text);

  return (
    <div className="item">
      <div className="circle" onClick={() => updateCompleted(id)}>
        {completed ? <span> &#10003; </span> : ""}
      </div>
      <div
        className={completed ? "strike" : ""}
        onDoubleClick={() => {
          if (!completed) {
            setEdit(true);
          }
        }}
      >
        {edit ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={() => {
              setEdit(false);
              updateText(id, editText);
            }}
          />
        ) : (
          text
        )}
      </div>
      <div className="close" onClick={() => handleDelete(id)}>
        X
      </div>
    </div>
  );
};

export default Item;
