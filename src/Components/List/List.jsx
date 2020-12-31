import React from 'react';
import Badge from './Badge/Badge';
import removeSvg from '../../images/remove.svg';
import './List.scss';
import axios from 'axios';
import classNames from 'classnames'
const List = ({ items, onClick, isRemovable, onRemove, onClickItem, activeItem }) => {
  const removeList = (item) => {
    if(window.confirm('Вы действительно хотите удалить список?')){
      axios.delete('http://localhost:3001/lists/' + item.id)
      .then(() => {
        onRemove(item.id);
      })
    }
  
  }
  return <ul onClick={onClick} className="list">
    { items.map((item, index )=> (
        <li key={index} onClick={onClickItem ? () => onClickItem(item) :null}
         className={classNames(item.className, {
           active: activeItem && activeItem.id === item.id
         })}>
          <i>
            {item.icon ? (item.icon) : (<Badge color={item.color.name} />)}

          </i>
          <span>
            {item.name}
            {item.tasks && item.tasks.length > 0 && ` (${item.tasks.length})`}
          </span>
        { isRemovable && 
        <img  src={removeSvg} alt={'Remove icon'} 
        className='list__removeSvg' onClick={() => removeList(item)}/>}
        </li>
      ))
    }

  </ul>
}

export default List;