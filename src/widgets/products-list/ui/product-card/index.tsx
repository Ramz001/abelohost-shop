import type { Product } from "@entities/product";
import styles from "./product-card.module.scss";
import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
  const isAuthenticated = true;

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={200}
          height={200}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.category}>{product.category}</p>
        <div className={styles.footer}>
          <span className={styles.price}>${product.price.toFixed(2)}</span>
          {isAuthenticated && (
            <button className={styles.button}>Add to cart</button>
          )}
        </div>
      </div>
    </div>
  );
}
