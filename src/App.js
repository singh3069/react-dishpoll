import "./App.css";
import Dishes from "./components/Dishes";
import LoginForm from "./components/LoginForm";
import Navigation from "./components/Navigation";
import Pollresult from "./components/Pollresult";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="">
      {/* <LoginForm /> */}
      <Navigation />
      <Routes>
        <Route path="/" element={<Dishes />} />
        <Route path="/pollresult" element={<Pollresult />} />
      </Routes>
    </div>
  );
}

export default App;
