import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Works from "./components/Works/Works";
import Footer from "./components/Footer/Footer";
import Service from "./components/Service/Service";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div
      className="App"
    >
      <Navbar />
      <Intro />
      <Service/>
      <Works />
      <Footer />
    </div>
  );
}

export default App;
