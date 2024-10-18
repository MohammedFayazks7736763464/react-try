
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Workss/Home'
import Projects from './Workss/Projects'
import Skills from './Workss/Skills'
import Contact from './Workss/Contact'


function App() {
  

  return (
    <>
  
<Header/>
<Routes>
  <Route path='/Home'  element={<Home/>} />
  <Route path='/Projects'  element={<Projects/>} />
  <Route path='/Skills'  element={<Skills/>} />
  <Route path='/Contact'  element={<Contact/>} />
</Routes>

<Footer/>


    </>
  )
}

export default App
