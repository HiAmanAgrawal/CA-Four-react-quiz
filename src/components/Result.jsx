import React from "react";
import CircularProgressBar from './CircularProgressBar';

export default function Result({ score, isDarkMode }) {
  const handleRefresh = () => {
    window.location.reload();
  };

  let message;

  if (score >= 3) {
    const successMessages = [
      "Congratulations! You did great!",
      "Well done! You successfully achieved it!",
      "Awesome! You nailed it!",
    ];
    message = successMessages[Math.floor(Math.random() * successMessages.length)];
  } else {
    const failureMessages = [
      "Better luck next time!",
      "Ohh, tough luck. Keep trying!",
      "Don't worry, you can improve!",
    ];
    message = failureMessages[Math.floor(Math.random() * failureMessages.length)];
  }

  return (
    <div className={isDarkMode ? "mainSection mainSectionDark" : "mainSection"}>
      <h2>Quiz Result</h2>
      <div className="line"></div>
      <div id="result">
        {score>2?<div id="leftResult">
          <img src="../public/giphy.gif" alt="gif" width="250px" />
          <em>
            Source:
            <a href="https://giphy.com/gifs/shaun-the-sheep-movie-not-my-gif-2016-oscar-nominations-tIeCLkB8geYtW">
              GIPHY
            </a>
          </em>
          </div>
        :
        <div id="leftResult">
          <img src="../public/dontworry.gif" alt="gif" width="250px" />
          <em>
            Source:
            <a href="https://giphy.com/gifs/shaun-the-sheep-movie-not-my-gif-2016-oscar-nominations-tIeCLkB8geYtW">
              GIPHY
            </a>
          </em>
          </div>
      }
        <div id="rightResult">
          <h6 id="commentary">{message}</h6>
          <CircularProgressBar progress={score*20} />
          <p>{score*20}% achieved</p>
          <p>{score} out of 5 questions are correct.</p>
          <button className="btn" onClick={handleRefresh}>Restart</button>
        </div>
      </div>
    </div>
  );
}
