import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Semantic from "./components/Semantic";
import Emotion from "./components/Emotion";
import Correlation from "./components/Correlation";

const App = () => {
  return (
      <main className="relative min-h-screen w-screen overflow-x-hidden">
          <Hero />
          <Intro />
          <Semantic />
          <Emotion />
          <Correlation />
          <NavBar/>
          <div className="w-screen h-screen"></div>
          <Footer/>
      </main>
  )
}

export default App