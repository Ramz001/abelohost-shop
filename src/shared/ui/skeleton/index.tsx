import React from 'react'
import styles from './skeleton.module.scss'

interface SkeletonProps {
  className?: string
  variant?: 'text' | 'circular' | 'rectangular'
  width?: string
  height?: string
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  variant = 'text',
  width,
  height,
}) => {
  const variantClass =
    variant === 'circular'
      ? styles.circular
      : variant === 'rectangular'
        ? styles.rectangular
        : styles.text

  return (
    <div
      className={`${styles.skeleton} ${variantClass} ${className}`}
      style={{ width, height }}
    />
  )
}
