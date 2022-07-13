import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import QuestionsList from "../../components/QuestionsList/QuestionsList.component";
import "./Trending.css";
import SearchBar from "../../components/SearchBar/SearchBar.component";

function Trending() {
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [query, setQuery] = useState("");

  async function fetchQuestions() {
    const response = await fetch(
      "http://localhost:8000/question/getQuestions",
      {
        method: "GET",
      }
    );

    const data = await response.json();

    if (data.status === true) {
      setQuestions(data.questions);
    } else {
      alert("Error retrieving questions");
    }
  }

  async function filterQuestions(query) {
    const response = await fetch(
      `http://localhost:8000/question/filterQuestions/${query}`,
      {
        method: "GET",
      }
    );

    const data = await response.json();

    if (data.status === true) {
      setQuestions(data.questions);
    } else {
      alert("Error retrieving questions");
    }
  }

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    } else {
      if (query) {
        filterQuestions(query);
      } else {
        fetchQuestions();
      }
    }
  }, [query]);

  function compare(a, b) {
    if (a.viewCount < b.viewCount) {
      return 1;
    }

    if (a.viewCount > b.viewCount) {
      return -1;
    }

    return 0;
  }

  questions.sort(compare);

  let retrievedQuestions = questions.map((question) => {
    return question;
  });

  if (!retrievedQuestions.length) {
    return (
      <div className="trending-body">
        <div className="trending-loading-spinner">
          <Oval
            color="#F5BE01"
            secondaryColor="#ffffff"
            height={80}
            width={80}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="trending-body">
        <SearchBar query={query} setQuery={setQuery} />
        <QuestionsList questions={retrievedQuestions} />
      </div>
    );
  }
}

export default Trending;
