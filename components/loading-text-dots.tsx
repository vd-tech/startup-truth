import React from 'react';
import styles from 'styles/components/loading-text-dots.module.css';

export default function LoadingTextDots() {
  return (
    <span className={styles.dots}>
      <span>.</span>
      <span>.</span>
      <span>.</span>
    </span>
  );
}
