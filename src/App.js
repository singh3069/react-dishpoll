import "./App.css";
import Dishes from "./components/Dishes";
import LoginForm from "./components/LoginForm";
import Navigation from "./components/Navigation";
import Pollresult from "./components/Pollresult";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // console.log(isAuthenticated);
  return (
    <div className="">
      {!isAuthenticated && (
        <LoginForm setIsAuthenticated={setIsAuthenticated} />
      )}
      {isAuthenticated && (
        <>
          <Navigation />
          <Routes>
            <Route path="/dishes" element={<Dishes />} exact />
            <Route path="/pollresult" element={<Pollresult />} exact />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
