// npm create vite  --> to create new project / give name , select react and select javascript
// npm install-- > To Install All Dependancies 
// npm run dev -->to start development server / same as live server 
// npm install react-router-dom --> install react router
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyImg from './assets/react.svg'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import State from './components/State'
import Ref from './components/Ref'
import Effect from './components/Effect'
function App() {

  let [user, setUser] = useState({
    name: "Rahul",
    age: 25

  })



  return (
    <>
      <BrowserRouter>
        {/* <img style={{ width: '300px', margin: '100px', border: '1px solid black', borderRadius: '10px' }} src={MyImg} alt="" />
      <h1 className='heading'>Hello {name}</h1>
      <p>coding cloud</p> */}
        <Header />

        <Routes>
          <Route path='/' element={<Home user={user} age={user.age} />} />
          <Route path='/about' element={<About user={user} />} />
          <Route path='/state' element={<State />} />
          <Route path='/ref' element={<Ref />} />
          <Route path='/effect' element={<Effect />} />
          {/* <Route path='/contact' element={<Contact />} /> */}
        </Routes>



      </BrowserRouter>
    </>
  )
}

export default App
