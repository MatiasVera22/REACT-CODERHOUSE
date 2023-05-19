import { Button } from "@mui/material";

const CounterPresentation = ({
  sumar,
  restar,
  counter,
  onAdd,
  stock

}) => {
  return (
    <div>
      <div style={{display:"flex", flexDirection:"row"}}>
      <Button style={{backgroundColor:"blue", color:"white", margin:"10px"}} onClick={sumar}>Sumar</Button>
      <h3>{counter}</h3>
      <Button style={{backgroundColor:"blue", color:"white", margin:"10px"}} onClick={restar}>Restar</Button>
      <Button style={{backgroundColor:"blue", color:"white", margin:"10px"}} onClick={()=>{onAdd(counter)}}>Agregar al carrito</Button>
      <h2>En stock:{stock}u</h2>
      </div>
      

 
    </div>
  );
};

export default CounterPresentation;