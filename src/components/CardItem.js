import React from "react";
import { showFormattedDate } from "../utils";
import BtnArchive from "./BtnArchive";
import BtnDel from "./BtnDel";

const CardItem = ({ id, title, createdAt, body, onDelete, onArchive }) => {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h1>{title}</h1>
        <p>{showFormattedDate(createdAt)}</p>
        <p>{body}</p>
      </div>
      <div className="note-item__action">
        <BtnDel id={id} onDelete={onDelete} />
        <BtnArchive id={id} onArchive={onArchive} />
      </div>
    </div>
  );
};

export default CardItem;
