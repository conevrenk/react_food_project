export default function Pizza({ pizzaObj }) {
  return (
    <div className="col">
      <div className="card">
        <img
          src={"/img/" + pizzaObj.image}
          alt=""
          className="card-img-top p-2 p-md-3 border-bottom "
        />
        <div className="card-body">
          <h2 className="card-title">{pizzaObj.title} </h2>
          <p className="card-text">{pizzaObj.description} </p>
          <span className="badge text-bg-primary">{pizzaObj.price}₺ </span>
        </div>
      </div>
    </div>
  );
}
