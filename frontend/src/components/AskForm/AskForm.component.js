import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AskForm.styles.css";

function AskForm() {
  const navigate = useNavigate();

  const [question, setQuestion] = useState("");

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  async function handleAskFormSubmit(event) {
    event.preventDefault();

    const response = await fetch(
      "https://discussion-forum-live.herokuapp.com/question/createQuestion",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({
          title: question,
          viewCount: 0,
        }),
      }
    );

    const data = await response.json();

    if (data.status === true) {
      alert("Question added successfully");
      setQuestion("");
      navigate("/trending");
    } else {
      alert("There was an error, please try again");
    }
  }

  return (
    <div className="ask-form-body">
      <h1>Ask a question</h1>
      <form onSubmit={handleAskFormSubmit}>
        <textarea
          type="text"
          placeholder="Question"
          required
          value={question}
          onChange={handleQuestionChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default AskForm;
