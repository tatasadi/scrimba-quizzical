export default function Answer({ answer, questionId, answerQuestion }) {
  return (
    <li>
      <input id={answer.id}
        type="radio"
        name={`question-${questionId}`}
        onClick={() => answerQuestion(questionId, answer.id)} />
      <label htmlFor={answer.id}>{answer.answer}</label>
    </li>
  )
}
