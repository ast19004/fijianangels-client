// import logo from "./logo.svg";
import "./App.css";
import CoreValues from "./pages/CoreValues";
import Pricing from "./pages/Pricing";
import Services from "./pages/Services";

function App() {
  return (
    <div className="App">
      <main>
        <CoreValues />
        <Services />
        <Pricing />
      </main>
    </div>
  );
}

export default App;
