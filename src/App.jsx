import { useState } from "react"
import data from "./data"
import Question from "./Question"

function App() {
  // not startet, started, finished
  const [quizState, setQuizState] = useState("not started")
  const questions = data.results

  function startQuiz() {
    setQuizState("started")
  }

  function checkAnswers() {
    setQuizState("finished")
  }

  function playAgain() {
    setQuizState("not started")
  }

  return (
    <>
      {quizState === "not started" ? (
        <button onClick={startQuiz}>Start Quiz</button>
      ) : (
        <div>
          {questions.map((question) => (
            <Question question={question} />
          ))}
          {quizState === "started" && (
            <button onClick={checkAnswers}>Check Answers</button>
          )}
          {quizState === "finished" && (
            <div>
              <h3>You Scored x/{questions.length} correct answers</h3>
              <button onClick={playAgain}>Play Again</button>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default App
