import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Contact from './Components/Contact';
import Error from './Components/Error';
import Nav from './Components/Nav';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="contact" element={<Contact />}/>


        <Route path="*" element={<Error />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
