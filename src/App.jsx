import Home from './components/home'
import './App.css'
import About from './components/About'
import Protect from './components/Protect'
import Dashboard from './components/Dashboard'
import { Routes, Route } from 'react-router-dom'

function App() {

  //React components reusability.

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>




        <Route path='/protect' element={<Protect />}>
          <Route path='dashboard' element={<Dashboard />}>
          </Route>


          <Route path='*' element={<h1>404 Not Found</h1>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App