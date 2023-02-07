import './App.css';
import React, { useEffect, useState } from "react";
import DesktopNavbar from "./components/Navbar/DNav";
import MobileNavbar from "./components/Navbar/MNav";
import DesktopFooter from "./components/Footer/DFooter";
import MobileFooter from "./components/Footer/MFooter";
import CustomCard from "./components/customCard/customCard";
import {
  Routes,
  Route,
} from "react-router-dom";
import Forms from "./components/Forms/Index";
import Voting from "./components/Voting/Index";
import Contestant from "./components/Contestant/Index";
import Home from "./components/Home/Index";
import About from "./components/About/About";
import More from "./components/More/More";
// import Dump from "./components/Home/Dump";
// import Candidate from './components/Data/Data';

function App() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 620;   
  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <div className="App">
      
       <DesktopNavbar/>
       
       <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/voting" element={<Voting />} />
        <Route path="/contestant" element={<Contestant />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/about" element={<About/>} />
        <Route path="/more" element={<More/>} />
      </Routes>
      {/* <Dump/> */}
      
      {width < breakpoint ? <MobileFooter /> : <DesktopFooter />}
    </div>
  );
}

export default App;
