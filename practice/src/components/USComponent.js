import React, { useState } from 'react'

function USComponent() {
    const [name, setName] = useState('Akbar');
    const updateName = ()=> {
        setName('Noor');
    }
  return (
    <div>
        <h1>{name}</h1>
        <button onClick={updateName}>Update</button>
    </div>
  )
}

export default USComponent