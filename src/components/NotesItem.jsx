import React from "react";
import { showFormattedDate } from "../utils/index";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

function NotesItem({ id, title, body, createdAt }) {
  return (
    <article className="note-item">
      <h3 className="note-item__title">
        <Link to={`/notes/${id}`}>{title}</Link>
      </h3>
      <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
      <p className="note-item__body">{parse(body)}</p>
    </article>
  );
}

NotesItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default NotesItem;
