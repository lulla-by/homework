import React from "react";
import styles from "./price.module.css";

const Price = ({tooltipHandler,toolState,tooltipToFalseHandler,count,totalPrice}) => {
  return (
    <section className={styles.container}>
      <div className ={styles.paymentInfo}>
        <div className={styles.totalPriceBox}>
          <span>총 상품 금액</span>
          <button
            onClick={() => {
              tooltipHandler();
            }}
            className={styles.questionButton}
          ></button>
          {toolState === false ? null : (
            <div className={styles.tooltipContainer}>
              <div className={styles.tooltipMessage}>
                총 상품금액에 <p>배송비는 포함되어 있지 않습니다.</p> <br/>
                결제시 배송비가
                추가될 수 있습니다
              </div>
              <button
                onClick={() => {
                  tooltipToFalseHandler();
                }}
              >
              </button>
            </div>
          )}
        </div>
        <div className={styles.totalPrice} >
          <span >총 수량 {count}개</span>
          <div>{totalPrice}원</div>
        </div>
      </div>
      {count == 0 ? (
        <button aria-label="비활성화 상태의 구매하기버튼" role="button" className={styles.purchseButton} disabled></button>
      ) : (
        <button aria-label="활성화된 상태의 구매하기버튼" role="button" className={styles.purchseButton}></button>
      )}
    </section>
  );
};

export default Price;
