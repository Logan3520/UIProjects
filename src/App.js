import React from 'react'


function App() {

  const Student =[
    {name:"manish", email:"manishsonawane18s@gmail.com", contact:888},
    {name:"Nikita", email:"nikitasonawane13ns@gmail.com", contact:111},
    {name:"manisha", email:"manishasonawane28s@gmail.com", contact:100},
  ]
  return (
    <div>
      <h1>Hnadeling list of members</h1>
      <table>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Contact</td>
          </tr>
         { Student.map((element)=>
          <tr>
            <td>{element.name}</td>
            <td>{element.email}</td>
            <td>{element.contact}</td>
          </tr>
)}
      </table>
    </div>
  )
}

export default App
