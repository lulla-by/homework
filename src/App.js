import styles from './App.module.css';
import React, { useState } from "react";
import Price from './component/price/Price';
import ProductInfo from './component/productInfo/ProductInfo';
import ProductShipping from './component/productShipping/ProductShipping';
import Counter from './component/counter/Counter';




function App() {
  let [count, setCount] = useState(1);
  let price= 6370;
  let [toolState, setToolState] = useState(false);

  const plusCounter = () => {
    setCount(count + 1);
  };

  const minusCounter = () => {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  const tooltipHandler = () => {
    setToolState(true);
  };
  const tooltipToFalseHandler = () => {
    setToolState(false);
  };
  let totalPrice = (price * count).toLocaleString()


  return (
    <main className={styles.viewport}>
     <ProductInfo />
     <ProductShipping />
     <Counter plusCounter={plusCounter} minusCounter={minusCounter} count={count}/>
     <Price tooltipHandler={tooltipHandler} toolState={toolState} tooltipToFalseHandler={tooltipToFalseHandler} count={count}totalPrice={totalPrice} />
    </main>
  );
}

export default App;
