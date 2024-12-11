import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Project1 from "./projects/project1/Project1";
import Exercise1 from "./exercises/exercise1/exercise1";

function App() {
  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/project1">Project 1</Link>
            </li>
            <li>
              <Link to="/exercise1">Exercise 1</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/project1" element={<Project1 />} />
          <Route path="/exercise1" element={<Exercise1 />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
