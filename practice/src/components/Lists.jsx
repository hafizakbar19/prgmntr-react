import React from 'react'

function Lists() {

    const students = ['Akbar', "Noor", 'Ziarat', 'Ahmed'];
    const obj = [
        {
            sName: 'Akbar',
            age: 35,
            sex: 'male'
        },
        {
            sName: 'Noor',
            age: 35,
            sex: 'male'
        },
        {
            sName: "Faiya",
            age: 50,
            sex: 'female'
        }
    ];



  return (
    <div>
        <h3>{students.map(el=>el + " ")}</h3>
        <div>
            {students.map((el,index) => <li key={index}>{el}</li>)} {/*adding key is necessry while rendering list items in react*/ }
        </div>
        <h3>{obj.map(el=>`${el.sName}'s age is ${el.age} and sex is ${el.sex}`)}</h3>
    </div>
  )
}

export default Lists