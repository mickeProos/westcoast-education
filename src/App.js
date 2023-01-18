import {Route,Routes} from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Courses from "./pages/Courses"
import Course from "./pages/Course"
import Home from "./pages/Home"
import Teachers from "./pages/Teachers"
import Teacher from "./pages/Teacher"
import AddPage from "./pages/AddPage"



function App() {
  return (
    <>
     <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddPage />}></Route>
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/teachers/:id" element={<Teacher />}/>
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<Course />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
