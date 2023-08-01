import { decode } from "html-entities"
import { shuffleArray } from "./utils"
import Answer from "./Answer"

export default function Question({ question, answerQuestion, isFinished }) {
  return (
    <div className="question">
      <div>{decode(question.question)}</div>
      <ul className="answers">
        {question.answers.map((answer) => (
          <Answer
            key={answer.id}
            answer={answer}
            questionId={question.id}
            answerQuestion={answerQuestion}
            isFinished={isFinished}
            isCorrectAnswer={answer.answer === question.correct_answer}
          />
        ))}
      </ul>
      <hr />
    </div>
  )
}
