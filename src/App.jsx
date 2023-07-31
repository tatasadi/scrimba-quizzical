import { useEffect, useState } from "react"
import { nanoid } from 'nanoid'
import data from "./data"
import Question from "./Question"
import { shuffleArray } from "./utils"


function App() {
  // not startet, started, finished
  const [quizState, setQuizState] = useState("not started")
  const [questions, setQuestions] = useState([])
  const [points, setPoints] = useState(0)

  console.log(questions)

  useEffect(() => {
    const allQuestions = data.results.map(q => ({
      id: nanoid(),
      answers: shuffleArray([
        q.correct_answer,
        ...q.incorrect_answers,
      ]).map(a => ({ id: nanoid(), answer: a })),
      ...q
    }));
    setQuestions(allQuestions)
  }, [])

  function answerQuestion(questionId, answerId) {
    setQuestions(oldQuestions => oldQuestions.map(
      oldQuestion => oldQuestion.id === questionId
        ? { ...oldQuestion, selectedAnswer: answerId }
        : oldQuestion
    ))
  }

  function startQuiz() {
    setQuizState("started")
    setPoints(0)
  }

  function checkAnswers() {
    questions.forEach(question => {
      if (!question.selectedAnswer) return
      const selectedAnswerValue = question.answers.filter(answer => answer.id === question.selectedAnswer)[0]?.answer
      if (selectedAnswerValue === question.correct_answer) setPoints(prevPoints => prevPoints + 1)
    });
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
            <Question key={question.id} question={question} answerQuestion={answerQuestion} isFinished={quizState === "finished"} />
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
