import React from 'react';
import styles from './Paginator.module.css';

const Paginator = ({ totalPages, currentPage, onPageChanged }) => {
  let pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map(p => {
        return <span className={currentPage === p && styles.selectedPage}
          onClick={() => { onPageChanged(p) }}>{p}</span>
      })}
    </div>
  )
}

export default Paginator;