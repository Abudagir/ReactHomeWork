import React, { useContext } from 'react'
import { Context } from '../App'

const ComponentC = () => {
const data = useContext(Context)

  return (
    <div>
      <ul>
        {data.map((task) =>(
          <li key={task}>{task}</li>
        ))}
      </ul>
    </div>
  )
}

export default ComponentC
