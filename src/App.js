import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>

    </div>
  );
}

function Counter() {


  const [count, setCount] = useState(33);
  const increaseCount = () =>setCount(count + 1);
  const decreaseCount = () =>setCount(count - 1);

  // const increaseCount=()=>{
  //   const newCount=count+1;
  //   setCount(newCount)
  // }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}




// function App() {
//   const products=[
//     {name:'laptop',price:75000},
//     {name:'Mobile',price:10000},
//     {name:'Watch',price:3000},
//     {name:'tablet',price:30000}
//   ]
//   return (
//     <div className="App">
//       {
//        products.map(product=><Product name={product.name} price={product.price}></Product>)
//       }
//     </div>
//   );
// }

function Product(props) {
  return (
    <div className="product">
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>

    </div>
  );
}

export default App;
