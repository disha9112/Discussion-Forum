import React from "react";
import QuestionBlock from "../QuestionBlock/QuestionBlock.component";
import "./QuestionsList.styles.css";

function QuestionsList({ questions }) {
  return (
    <div className="questions-list-body">
      {questions.map((question, idx) => {
        return (
          <QuestionBlock
            key={idx}
            id={question._id}
            name={question.name}
            date={question.date}
            title={question.title}
          />
        );
      })}
    </div>
  );
}

export default QuestionsList;
