import React from 'react';
import { Menu } from 'semantic-ui-react';


const Filter = ({setFilter, filterBy}) => {

  return (
    <Menu secondary>
      <Menu.Item
        active={filterBy === 'all'}
        onClick={setFilter.bind(this, 'all')}>Все</Menu.Item>
      <Menu.Item
        active={filterBy === 'price_high'}
        onClick={setFilter.bind(this, 'price_high')}>От дорогих</Menu.Item>
      <Menu.Item
        active={filterBy === 'price_low'}
        onClick={setFilter.bind(this, 'price_low')}>От дешевых</Menu.Item>
    </Menu>
  )
}

export default Filter;