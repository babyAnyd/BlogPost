import "./App.css";
import "./Style/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./Header/Navbar";
import { Contents } from "./Components/Content";
import { Footer } from "./Header/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Contents />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
