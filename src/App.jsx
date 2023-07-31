import { useEffect, useState } from "react"
import { nanoid } from 'nanoid'
import data from "./data"
import Question from "./Question"
import { shuffleArray } from "./utils"


function App() {
  // not startet, started, finished
  const [quizState, setQuizState] = useState("not started")
  const [questions, setQuestions] = useState([])
  const points = 0

  useEffect(() => {
    const allQuestions = data.results.map(q => ({
      id: nanoid(),
      answers: shuffleArray([
        q.correct_answer,
        ...q.incorrect_answers,
      ]).map(a => ({ id: nanoid(), answer: a })),
      ...q
    }));
    console.log(allQuestions)
    setQuestions(allQuestions)
  }, [])
  // const [questionPoints, setQuestionPoints] = useState([
  //   // { id: 1, point: 1 },
  //   // { id: 2, point: 1 },
  //   // { id: 3, point: 1 },
  //   // { id: 4, point: 0 },
  //   // { id: 5, point: 1 },
  // ])

  // function changeQuestionPoint(id, point) {
  //   const questionPointObj = { id, point }
  //   const newQuestionPoints = questionPoints.filter(
  //     (questionPoint) => questionPoint.id !== id
  //   )
  //   newQuestionPoints.push(questionPointObj)
  //   setQuestionPoints(newQuestionPoints)
  // }

  // const points = questionPoints.reduce(
  //   (accumulator, currentValue) => accumulator + currentValue.point,
  //   0
  // )

  // const questions = data.results

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
            <Question key={question.id} question={question} />
          ))}
          {quizState === "started" && (
            <button onClick={checkAnswers}>Check Answers</button>
          )}
          {quizState === "finished" && (
            <div>
              <h3>
                You Scored {points}/{questions.length} correct answers
              </h3>
              <button onClick={playAgain}>Play Again</button>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default App
