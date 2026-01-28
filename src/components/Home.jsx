import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Home({name, setName, age, setAge}) {




    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/child');
    }


    return (
        <div>
            This is Home components.

            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name' />
            <input type="number" name='age' value={age} onChange={(e) => setAge(e.target.value)} placeholder='Enter your age' />
            <button onClick={handleSubmit}>Submit</button>

        </div>
    )
}