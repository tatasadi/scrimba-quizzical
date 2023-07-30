import React from "react"

export default function Answer({ answer, questionId }) {
  return (
    <li>
      <label htmlFor={answer}>
        <input id={answer} type="radio" name={`question-${questionId}`} />
        {answer}
      </label>
    </li>
  )
}
