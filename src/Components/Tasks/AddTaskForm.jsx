
import React, { useState } from 'react';
import './Tasks.scss';
import addSvg from '../../images/add.svg'
import axios from 'axios';


const AddTaskForm = ({ lists, onAddTask }) => {
    const [visibleForm, setFormVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const toggleFormVisible = () => {
        setFormVisible(!visibleForm)
        setInputValue('')
    }
    const addTask = () => {
        setIsLoading(true);
        const obj = {
            listId: lists.id,
            text: inputValue,
            completed: false
        }
        axios.post('http://localhost:3001/tasks', obj).then(({ data }) => {
            onAddTask(lists.id, data);
            toggleFormVisible()
        })
        .catch(() => {alert('Ошибка при добавлении списка')})
        .finally(() => { setIsLoading(false);})
       
    }
    return (
        <div className="tasks__form">
            {!visibleForm ? (<div onClick={toggleFormVisible} className="tasks__form-new">
                <img src={addSvg} alt='add' />
                <span>Новая задача</span>
            </div>

            ) : (<div className="tasks__form-block">
                <input className='field'   
                onChange={e => setInputValue(e.target.value)}  
                       value={inputValue}
                       type='text'
                       placeholder='Текст задачи' />
                <button disabled={isLoading}  onClick={addTask} className='button'>
                    {isLoading ? '...Добавление' : 'Добавить'}
                    </button>
                <button onClick={toggleFormVisible} className='button button--grey'>Отмена</button>
            </div>)}

        </div>
    )
}


export default AddTaskForm;