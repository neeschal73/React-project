import React from 'react'

export default function Child(props) {

const { name, age, setName, setAge } = props;


  return (
    <div>
        <input type="text" name= "name" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter your name' />
        <input type="number" name='age' value={age} onChange={(e)=>setAge(e.target.value)} placeholder='Enter your age' />
      Hello my name is {name} and my age is {age}
    </div>
  )
}