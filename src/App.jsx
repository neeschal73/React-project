import Home from './components/home'
import './App.css'
import About from './components/About'
import Protect from './components/Protect'
import Dashboard from './components/Dashboard'
import Child from './components/Child'
import Parents from './components/Parents'
import Contact from './components/Contact'
import React , {useState} from 'react'
import { Routes, Route } from 'react-router-dom'

function App() {

  //React components reusability.
const [name, setName] = useState(" ");
const [age, setAge] = useState(0);



  return (
    <>
      <Routes>
        <Route path='/' element={<Home name={name} setName={setName} age={age} setAge={setAge} />}></Route>
        <Route path='/about' element={<About />}></Route>



        <Route path='/child' element={<Child name={name} setName={setName} age={age} setAge={setAge} />}></Route>



        <Route path='/parent' element={<Parents />}></Route>
        <Route path='/contact' element={<Contact />}></Route>



        <Route path='/protect' element={<Protect />}>
          <Route index element={<Dashboard />} ></Route>
          <Route path='dashboard' element={<Dashboard />}>
          </Route>



          <Route path='*' element={<h1>404 Not Found</h1>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
