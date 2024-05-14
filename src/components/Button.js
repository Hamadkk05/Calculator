import React from 'react'
const getStyleName = btn => {
  const className = {
    '=': 'equals',
    'x': 'opt',
    '-': 'opt',
    '+': 'opt',
    '/': 'opt',
  }
  return className[btn]
}
const Button = ({ value }) => {
  return (
    <div className={`${getStyleName(value)} button `}>{value}</div>
  )
}

export default Button