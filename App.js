import React from "react";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { Home } from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>

      <Routes>
        <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/Login" element={<Login />}></Route>
            <Route exact path="/Signup" element={<Signup />}></Route>
            <Route exact path="/Home" element={<Home />}></Route>

            
          </Routes>



        </Router>

        );
}

        export default App;
