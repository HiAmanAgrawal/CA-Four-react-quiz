import React, { useState } from 'react';
import './App.css';
import DarkMode from './components/DarkMode';
import QuestionBox from './components/QuestionBox';

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isHighlight, setIsHighlight] = useState(false);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleDarkModeToggle = (darkModeState) => {
    setIsDarkMode(darkModeState);
  };

  return (
    <div>
    <div id="body" className={isDarkMode ? "bodyDark" : ""}>
        <div id="upperNavigation">
          <div id="logo">
            <img src="public/reactQuizLogo.png" alt="React logo" />
            <strong id="logoText">React Quiz</strong>
          </div>
          <DarkMode onDarkModeToggle={handleDarkModeToggle} />
        </div>
        {!quizStarted ? (
          <div className={isDarkMode ? "mainSection mainSectionDark" : "mainSection"}>
            <h1>React Quiz</h1>
            <div className="line"></div>
            <div id="instructions">
              <ul>
                <li>Users cannot navigate back to previous questions once they have moved forward.</li>
                <li>No time limit.</li>
                <li>No negative marking.</li>
                <li>User responses are submitted upon clicking an option. (No modifications allowed)</li>
                <li>There is no automatic submission or timer-based submission.</li>
              </ul>
            </div>
            <div className="line"></div>
            <div id="confirmation">
              <em>By selecting &#39;start quiz&#39;, you confirm having read the rules and conditions written above.</em>
              <button className='btn' onClick={handleStartQuiz}>Start quiz</button>
            </div>
          </div>
        ) : (
          <div>
            <QuestionBox isDarkMode={isDarkMode} isHighlight={isHighlight}/>
            <button className={isHighlight ? "yellowHighlightBtn" : "btn"} onClick={() => setIsHighlight(true)}>Highlight Question</button>
            <button className={isHighlight ? "btn" : "yellowHighlightBtn"} onClick={() => setIsHighlight(false)}>Unhighlight Question</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;