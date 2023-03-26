
import Navbar from './components/Navbar';
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from './components/Contact';
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <div className="bg-[#0a192f] text-gray-300 text-white text-center pb-8 pt-4">© Copyright 2023. <span className="font-semibold">Made by <span className="font-bold underline hover:shadow-md cursor-pointer">Danishkar S</span></span></div>
    </div>
  );
}

export default App;
