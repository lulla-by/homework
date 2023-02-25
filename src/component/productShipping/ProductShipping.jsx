import React from 'react';
import styles from "./productShipping.module.css"

const ProductShipping = () => {
  return (
    <section className={styles.container}>
        <p className={styles.a11y}>택배유형</p>
        <p  className={styles.courierDelivery}>택배배송</p>
        <p className={styles.a11y}>택배비</p>
        <p className={styles.shippingPrice}>3,000원</p>
        <p className={styles.a11y}>택배비 결제방식</p>
        <p className={styles.shippingPayment}>(주문시 결제)</p>
        <p className={styles.a11y}>택배비 단위</p>
        <p className={styles.shippingUnit}>10개마다 부과</p>
    </section>
  )
}

export default ProductShipping