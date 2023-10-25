import React, { useContext } from 'react'
import { MyContext } from './Context'

const ComponentC = () => {
const data = useContext(MyContext)

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
