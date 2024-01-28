import React, { useState } from "react";
import questions from "../questions/";
import Result from "./Result";


export default function QuestionBox({ isDarkMode , isHighlight }) {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (index) => {
    if (!quizFinished) {
      setSelectedOption(index);

      const currentQuestionObject = questions[currentQuestion - 1];
      const isCorrect = currentQuestionObject.options[index].isCorrect;

      if (isCorrect) {
        setScore(score + 1);
      }

      if (currentQuestion < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        setQuizFinished(true);
      }
    }
  };

  const handleSubmit = () => {
    setQuizFinished(true);
  };

  return (
    <div>
      {!quizFinished ? (
        <div className={isDarkMode ? "mainSection mainSectionDark" : "mainSection"}>
          <p id="questionNumber">
            Question: {currentQuestion} out of {questions.length}
          </p>
          <h3 id={isHighlight ? "highlightedQuestion" : "question"}>
            {questions[currentQuestion - 1].text}
          </h3>
          <div className="line"></div>
          {questions[currentQuestion - 1].options.map((option, index) => (
            <div
              key={index}
              className={`${isDarkMode ? "options optionsDark" : "options"} ${selectedOption === index ? 'selected' : ''}`}
              
              onClick={() => handleOptionClick(index)}
            >
              {option.text}
              </div>
              ))}
              
              
              
              <button className="sumbitBtn" onClick={handleSubmit}>Submit Test!</button>
        </div>
      ) : (
        <Result score={score} isDarkMode={isDarkMode} />
      )}
    </div>
  );
}
