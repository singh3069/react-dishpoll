import "./App.css";
import Dishes from "./components/Dishes";
import LoginForm from "./components/LoginForm";
import Navigation from "./components/Navigation";
import Pollresult from "./components/Pollresult";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedDish, setSelectedDish] = useState([]);

  // limited the array length to 3
  selectedDish.length = Math.min(selectedDish.length, 3);
  return (
    <div className="">
      {!isAuthenticated && (
        <LoginForm setIsAuthenticated={setIsAuthenticated} />
      )}
      {isAuthenticated && (
        <>
          <Navigation />
          <Routes>
            <Route
              path="/dishes"
              element={
                <Dishes setSelected={setSelectedDish} selected={selectedDish} />
              }
              exact
            />
            <Route
              path="/pollresult"
              element={<Pollresult selected={selectedDish} />}
              exact
            />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
