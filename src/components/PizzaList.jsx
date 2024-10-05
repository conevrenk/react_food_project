import Pizza from "../components/Pizza";
function PizzaList() {
  const pizzas = [
    {
      title: "Karışık Pizza",
      description: "Seper harika pizza",
      image: "pizza1.jpg",
      price: 400,
      is_active:true
    },
    {
      title: "peynirli  Pizza",
      description: "Seper harika pizza",
      image: "pizza2.jpg",
      price: 200,
      is_active:true
    },
    {
      title: "Sucuklu Pizza",
      description: "Seper harika pizza",
      image: "pizza3.jpg",
      price: 500,
      is_active:true
    },
    {
      title: "Acılı  Pizza",
      description: "Seper harika pizza",
      image: "pizza4.jpg",
      price: 640,
      is_active:true
    },
  ];
  return (
    <div className="pizza-list">
      <h2>Pizza List</h2>
      <div className="row row-cols-md-3 row-cols-xl-4 g-4">
        {pizzas.length > 0 ? (
          pizzas.map((p, index) => <Pizza pizzaObj={p} key={index} />)
        ) :
          (<p>Ürün bitti</p>)}
      </div>
    </div>
  );
}
export default PizzaList;
