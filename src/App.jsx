import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import Create from './Create.jsx'
import Update from './Update.jsx'
import Read from './Read.jsx'


function App() {
  const [students, setStudents] = useState([]); 

    useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        setStudents(data); // load API data
      });
  }, []);


  return (
    <>
    
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home students={students} setStudents={setStudents} />}></Route>
            <Route path='/create' element={<Create setStudents={setStudents}/>}></Route>
            <Route path='/update/:id' element={<Update students={students} setStudents={setStudents} />} ></Route>
            <Route path='/read/:id' element={<Read students={students} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
