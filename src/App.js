import './App.css'
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Creation from "./components/Creation"


function App() {


  return (
    <div className='app'>

      <Routes>
        <Route exact path="/" element={<Header/>}/>
        <Route path="/creation" element={<Creation/>}/>
      </Routes>
    </div>
  )
}

export default App;
