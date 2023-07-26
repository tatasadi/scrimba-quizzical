import { decode } from "html-entities"
import { shuffleArray } from "./utils"
import Answer from "./Answer"

export default function Question({ question }) {
  const answers = shuffleArray([
    question.correct_answer,
    ...question.incorrect_answers,
  ])

  return (
    <div>
      <div>{decode(question.question)}</div>
      <ul>
        {answers.map((answer) => (
          <Answer answer={answer} />
        ))}
      </ul>
      <hr />
    </div>
  )
}