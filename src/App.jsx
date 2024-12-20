import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Semantic from "./components/Semantic";
import Emotion from "./components/Emotion";
import Correlation from "./components/Correlation";
import ResearchQuestions from "./components/ResearchQuestions.jsx";


const App = () => {
  return (
      <main className="relative min-h-screen w-screen overflow-x-hidden">
          <NavBar/>
          <Hero />
          <Intro />
          <ResearchQuestions />
          <Semantic />
          <Emotion />
          <Correlation />
          <Footer/>
      </main>
  )
}

export default App