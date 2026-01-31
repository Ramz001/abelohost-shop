'use client'

import { useEffect } from 'react'
import { useProductsStore } from './models/useProductsStore'
import ProductCard from './ui/product-card'
import ProductCardSkeleton from './ui/product-card-skeleton'
import styles from './products-list.module.scss'

export default function ProductsListWidget() {
  const { fetchProducts, data, loading, error } = useProductsStore()

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  if (loading) {
    return (
      <section className={styles.wrapper}>
        {Array.from({ length: 8 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </section>
    )
  }

  if (error) {
    return <div className={styles.error}>Error: {error}</div>
  }

  return (
    <section className={styles.wrapper}>
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  )
}
