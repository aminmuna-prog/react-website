import { Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import About from './component/About';
import Service from './component/Service';
import Contact from './component/Contact';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
          
          <Route path="/" element={<Home />} />     
          <Route path="/about" element={<About />} /> 
          <Route path="/service" element={<Service />} /> 
          <Route path="/contact" element={<Contact />} /> 
         
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
