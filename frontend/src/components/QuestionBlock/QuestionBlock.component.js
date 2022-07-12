import React from "react";
import moment from "moment";
import "./QuestionBlock.styles.css";
import { Link } from "react-router-dom";

function QuestionBlock({ id, name, date, title }) {
  return (
    <div className="questionblock-body">
      <div className="questionblock-content">
        <Link to={`/question/${id}`}>
          <div className="questionblock-title">{title}</div>
        </Link>
        <div className="questionblock-author">
          Author: <span>{name}</span>
        </div>
        <div className="questionblock-footer">
          <div className="questionblock-date">
            Asked <span>{moment(date).fromNow()}</span>
          </div>
          {/* <div className="questionblock-replies">
            Replies <span>(x)</span>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default QuestionBlock;
