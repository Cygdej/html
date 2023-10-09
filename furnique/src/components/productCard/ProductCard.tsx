import React, { ReactNode } from "react";
import { Button } from "../";
import { Bag } from "../../assets/icons";

import styles from "./productCard.module.scss";

interface Props {
  img: string;
  title: string;
  sale: string;
  prevPrice: string;
  currentPrice: string;
}

const ProductCard = ({ img, title, sale, prevPrice, currentPrice }: Props) => {
  const saleIcon: ReactNode | null =
    sale !== "0" ? <span className={styles.sale}>{sale}</span> : null;

  const prevPriceContent: ReactNode | null =
    prevPrice !== "" ? (
      <span className={styles.pricePrev}>{prevPrice}</span>
    ) : null;

  const btnProps = {
    onClickFunc: () => {},
    className: styles.btn,
    styles: {
      color: "orange",
      icon: true,
    },
  };

  return (
    <article className={styles.product}>
      <div className={styles.header}>
        {saleIcon}
        <picture className={styles.pic}>
          <img src={img} alt={title} className={styles.picImg} />
        </picture>
        <Button {...btnProps}>
          <span className={styles.icon}>
            <Bag />
          </span>{" "}
          Add to cart
        </Button>
      </div>
      <div className={styles.footer}>
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.price}>
          {prevPriceContent}
          <span className={styles.priceCurrent}>{currentPrice}</span>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
