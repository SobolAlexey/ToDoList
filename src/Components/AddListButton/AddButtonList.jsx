import React, { Fragment, useEffect, useState } from 'react';
import './AddButtonList.scss';
import addImg from '../../images/plus.svg';
import List from '../List/List';
import Badge from '../List/Badge/Badge';
import closeSvg from '../../images/close.svg';
import axios from 'axios';

const AddButtonList = ({ colors, onAdd }) => {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [selectedColor, selectColor] = useState(3);
    const [inputValue, setIputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if(Array.isArray(colors)) {
            selectColor(colors[0].id)
        }

    }, [colors])
    
    const onClose = () => {
        setVisiblePopup(false);
        setIputValue('');
        selectColor(colors[0].id);
    }
    const addList = () => {
        if (!inputValue) {
            alert('Введите значение');
            return;
        }
        setIsLoading(true)
      axios
      .post('http://localhost:3001/lists', {name:inputValue,
    colorId: selectedColor})
    .then(({data}) => {
        const color = colors.filter(c => c.id === selectedColor)[0];
        const listObj = {...data, color, task: []};
        onAdd(listObj)
        onClose()
    }).finally(() => {
        setIsLoading(false)
    })
       
    }
    return <Fragment>
        <List
            onClick={() => setVisiblePopup(true)}

            items={[{
                icon: (<img src={addImg} alt='List icon' width='10px' height='10px' />),
                name: 'Добавить список',
                active: false,
            },]}
            className='addList' />
        {visiblePopup && <div className='addListPopup'>

            <img onClick={onClose} src={closeSvg} className="addListPopup__closeBtn"></img>

            <input value={inputValue} onChange={e => setIputValue(e.target.value)} className='field' type='text' placeholder='Название списка' />
            <div className='addListPopup__colors'>
                {colors.map(color =>
(                    <Badge onClick={() => selectColor(color.id)}
                        key={color.id}
                        color={color.name}
                        className={selectedColor === color.id && 'active'} />))}
            </div>
            <button onClick={addList} className='button'>{isLoading ?'...Добавление' :'Добавить'}</button>
        </div>}
    </Fragment>
}


export default AddButtonList;