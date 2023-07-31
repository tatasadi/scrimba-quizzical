export default function Answer({ answer, questionId }) {
  return (
    <li>
      <input id={answer} type="radio" name={`question-${questionId}`} />
      <label htmlFor={answer}>{answer}</label>
    </li>
  )
}
