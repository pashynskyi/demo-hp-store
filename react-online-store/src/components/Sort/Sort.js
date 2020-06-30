import React from 'react';
import { Menu } from 'semantic-ui-react';


const Filter = ({setSort, sortBy}) => {

  return (
    <Menu secondary>
      <Menu.Item
        active={sortBy === ''}
        onClick={setSort.bind(this, '')}>Все</Menu.Item>
      <Menu.Item
        active={sortBy === 'Desc'}
        onClick={setSort.bind(this, 'Desc')}>От дорогих</Menu.Item>
      <Menu.Item
        active={sortBy === 'Asc'}
        onClick={setSort.bind(this, 'Asc')}>От дешевых</Menu.Item>
    </Menu>
  )
}

export default Filter;