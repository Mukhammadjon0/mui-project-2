import "./App.css";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="px-32">
      <Header />
      <Navbar />
      <Banner />
      <Cards />

    </div>
  );
}

export default App;
