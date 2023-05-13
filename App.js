import Analytics from "./Components/Analytics";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Newsletter from "./Components/Newsletter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
