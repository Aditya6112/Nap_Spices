import About from "./components/About";
// import Contact from "./components/Contact";
import Distribution from "./components/Distribution";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Mission from "./components/Mission";
import Plain from "./components/Plain";
import Processed from "./components/Processed";

function App() {
  return (
    <>
      <Header />
      <About />
      <Mission />
      <Processed />
      <Plain />
      <Distribution />
      {/* <Contact /> */}
      <Footer />
    </>
  );
}

export default App;
