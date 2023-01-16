import {Route,Routes} from "react-router-dom"
import Navbar from "./components/Navbar"
import Courses from "./pages/Courses"
import Home from "./pages/Home"
import Teachers from "./pages/Teachers"

function App() {
  return (
    <>
     <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
