import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HobbiesPage from "./pages/HobbiesPage";
import PersonalInfoPage from "./pages/PersonalInfoPage";
import HomePage from "./pages/HomePage";
import './App.css'
import NavBar from "./components/NavBar";

function App() {

  return (
    <Router>
      <div>
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/hobbies" element={<HobbiesPage/>}/>
          <Route path="/personal" element={<PersonalInfoPage/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
