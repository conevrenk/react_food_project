import Pizza from "./Pizza";
function PizzaList() {
    return (
      <div className="pizza-list">
        <h2>Pizza List</h2>
        <div className="row row-cols-md-3 row-cols-xl-4 g-4">
          
          <Pizza/>
          <Pizza/>
          <Pizza/>
          <Pizza/>
          <Pizza/>
          <Pizza/>
          <Pizza/>
          <Pizza/>
          <Pizza/>
          <Pizza/>
          <Pizza/>
          <Pizza/>
  
        </div>
        
     </div>
        
    
    )
   
}
export default PizzaList;