import { Skeleton } from '@/shared/ui/skeleton'
import styles from './product-card-skeleton.module.scss'

export default function ProductCardSkeleton() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <Skeleton variant="rectangular" width="100%" height="100%" />
      </div>
      <div className={styles.content}>
        <Skeleton variant="text" height="1.5rem" width="80%" />
        <Skeleton variant="text" height="1rem" width="40%" />
        <div className={styles.footer}>
          <Skeleton variant="text" height="1.5rem" width="4rem" />
          <Skeleton variant="rectangular" height="2rem" width="5rem" />
        </div>
      </div>
    </div>
  )
}
