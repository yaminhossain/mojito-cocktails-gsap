import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="bg-amber-50 h-dvh">

      </div>
    </main>
  );
};

export default App;
