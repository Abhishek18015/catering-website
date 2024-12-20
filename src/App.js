
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Poster from './Components/Poster';
import Ourmenu from './Components/Ourmenu';
import About from './Components/About';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Contact from './Components/Contact';
import Home from './Components/Home';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
      <Route path='/' element={<Home />} />
         
          <Route path='poster' element={<Poster />} />
          <Route path='ourmenu' element={<Ourmenu />} />
          <Route path='About' element={<About />} />  
          <Route path='contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
 
      

    </>
    );
}

export default App;
