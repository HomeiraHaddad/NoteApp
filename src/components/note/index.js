import React, { useState } from "react";
import { Button } from "react-bootstrap";
import styles from "./note.module.css";

const Note = ({ id, title, color, onDelete, onEdit }) => {
  const [show, setShow] = useState(false);

  const showDelete = () => {
    setShow(!show);
  };
  const hideDelete = () => {
    setTimeout(() => {
      setShow(false);
    }, 500);
  };
  return (
    <div
      className={`${"card shadow-sm rounded mx-3 mb-5 mt-3 fade show"} ${
        styles["div-note"]
      }`}
      style={{ backgroundColor: color }}
      onClick={showDelete}
      onMouseLeave={hideDelete}
    >
      <p className="card-text p-3" style={{ fontWeight: "bold" }}>
        {title}
      </p>
      {show && (
        <div className="d-flex justify-content-center align-items-center">
          <Button
            variant="outline-dark"
            onClick={onDelete.bind(this, id)}
            className="m-1"
            size="sm"
          >
            <span className="material-symbols-outlined">delete</span>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Note;
