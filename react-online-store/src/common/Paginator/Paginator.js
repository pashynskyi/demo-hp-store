import React from 'react';
import styles from './Paginator.module.css';
import { Pagination, Icon } from 'semantic-ui-react';

const Paginator = ({ totalPages, currentPage, onPageChanged }) => {

  const handlePaginationChange = (e, { activePage }) => onPageChanged(activePage)

  return (
    <div>
      <Pagination
        onPageChange={handlePaginationChange}
        activePage={currentPage}
        ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
        firstItem={{ content: <Icon name='angle double left' />, icon: true }}
        lastItem={{ content: <Icon name='angle double right' />, icon: true }}
        prevItem={{ content: <Icon name='angle left' />, icon: true }}
        nextItem={{ content: <Icon name='angle right' />, icon: true }}
        totalPages={totalPages} />
    </div>
  )
}

export default Paginator;