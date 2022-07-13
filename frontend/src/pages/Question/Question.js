import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import "./Question.css";

function Question() {
  const { questionId } = useParams();

  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  async function fetchQuestion(questionId) {
    const response = await fetch(
      `http://localhost:8000/question/getQuestion/${questionId}`,
      {
        method: "GET",
      }
    );

    const data = await response.json();

    if (data.status === true) {
      setTitle(data.question.title);
      setName(data.question.name);
      setDate(data.question.date);
    } else {
      alert("There was an error, kindly try again");
    }
  }

  useEffect(() => {
    if (questionId) {
      fetchQuestion(questionId);
    }
  }, [questionId]);

  return (
    <div className="question-body">
      <div className="question-title">{title}</div>
      <div className="question-author">
        Posted by <span>{name}</span>, <span>{moment(date).fromNow()}</span>
      </div>
    </div>
  );
}

export default Question;
