import { BrowserRouter, Route,Routes } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
