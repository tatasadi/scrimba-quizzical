export default function Answer({ answer, questionId, answerQuestion, isFinished, isCorrectAnswer }) {
  const className = isFinished ? isCorrectAnswer ? "correct" : "false" : ""
  return (
    <li>
      <input id={answer.id}
        type="radio"
        name={`question-${questionId}`}
        onClick={() => answerQuestion(questionId, answer.id)}
        disabled={isFinished}
      />
      <label
        htmlFor={answer.id}
        className={className}>
        {answer.answer}
      </label>
    </li>
  )
}
