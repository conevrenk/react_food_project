import Navbar from "./components/Navbar";
import PizzaList from "./components/PizzaList";
function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <PizzaList />
      </div>
    </>
  );
}
export default App;
