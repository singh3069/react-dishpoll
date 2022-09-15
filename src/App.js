import "./App.css";
import Dishes from "./components/Dishes";
import Navigation from "./components/Navigation";
import Pollresult from "./components/Pollresult";

function App() {
  return (
    <div className="">
      <Navigation />
      <Dishes />
      <Pollresult />
    </div>
  );
}

export default App;
