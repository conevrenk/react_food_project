import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import PizzaList from "./components/PizzaList.jsx";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <PizzaList />
        <Footer/>
      </div>
    </>
  );
}
export default App;
