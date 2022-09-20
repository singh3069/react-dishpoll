import "./App.css";
import Dishes from "./components/Dishes";
import LoginForm from "./components/LoginForm";
import Navigation from "./components/Navigation";
import Pollresult from "./components/Pollresult";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedDish, setSelectedDish] = useState([]);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  // limited the array length to 3
  selectedDish.length = Math.min(selectedDish.length, 3);

  // console.log("app.js", selectedDish);

  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Error: The status is ${response.status}, this in an HTTP error.`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      });
  }, []);

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
                <Dishes
                  setSelectedDish={setSelectedDish}
                  selectedDish={selectedDish}
                  data={data}
                  error={error}
                />
              }
              exact
            />
            <Route
              path="/pollresult"
              element={<Pollresult selectedDish={selectedDish} />}
              exact
            />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
