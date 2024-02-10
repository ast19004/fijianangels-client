// import logo from "./logo.svg";
import "./App.css";
import Contact from "./pages/Contact";
import CoreValues from "./pages/CoreValues";
import Pricing from "./pages/Pricing";
import Services from "./pages/Services";
import Staff from "./pages/Staff";

function App() {
  return (
    <div className="App">
      <main>
        <CoreValues />
        <Staff />
        <Services />
        <Pricing />
        <Contact />
      </main>
    </div>
  );
}

export default App;
