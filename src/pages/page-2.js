import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
  <div>
    <h1>Hi from the second page</h1>
    <p>Bubble Sort <a href='https://www.codewars.com/kata/bubble-sort'> Link</a></p>
    <p>Encrypt This  <a href='https://www.codewars.com/kata/encrypt-this'> Link</a></p>
    <p>Shortest Word  <a href='https://www.codewars.com/kata/shortest-word'> Link</a></p>
    <p>Valid Perentheses <a href='https://www.codewars.com/kata/valid-parentheses'> Link</a></p>
    <p>Bonus <a href='https://www.codewars.com/kata/connecting-values/javascript'> Link</a></p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
