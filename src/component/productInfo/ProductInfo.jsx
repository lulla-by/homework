import React from "react";
import styel from "./productInfo.module.css";

const ProductInfo = () => {
  return (
    <section className={styel.container}>
      <div className={styel.titleBox}>
        <h1 className={styel.title}>레피젠 코로나 자가 검사 키트</h1>
        <p className={styel.title}>2개입X1박스</p>
      </div>
      <div  className={styel.productImg} alt="자가검사키트상품이미지"></div>
      <div className={styel.priceContainer}>
        <div>
          <span className={styel.a11y}>할인율</span>
          <strong className={styel.discountPercentage}>88%</strong>
        </div>
        <div className={styel.priceBox} >
          <span className={styel.a11y}>정가</span>
          <del>56,760원</del>
          <span className={styel.a11y}>판매가</span>
          <strong>6,370원</strong>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
