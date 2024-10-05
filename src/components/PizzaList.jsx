import Pizza from "../components/Pizza";
function PizzaList() {
  const pizzas = [
    {
      title: "Karışık Pizza",
      description: "Seper harika pizza",
      image: "pizza1.jpg",
      price: 400,
    },
    {
      title: "peynirli  Pizza",
      description: "Seper harika pizza",
      image: "pizza2.jpg",
      price: 200,
    },
    {
      title: "Sucuklu Pizza",
      description: "Seper harika pizza",
      image: "pizza3.jpg",
      price: 500,
    },
    {
      title: "Acılı  Pizza",
      description: "Seper harika pizza",
      image: "pizza4.jpg",
      price: 640,
    },
  ];
  return (
    <div className="pizza-list">
      <h2>Pizza List</h2>
      <div className="row row-cols-md-3 row-cols-xl-4 g-4">
        {pizzas.map((p,index) => (
          <Pizza pizzaObj={p} key={index} />
        ))}
      </div>
    </div>
  );
}
export default PizzaList;
