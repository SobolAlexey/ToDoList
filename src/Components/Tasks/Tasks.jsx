
import React, { useState } from 'react';
import './Tasks.scss';
import editSvg from '../../images/edit.svg'
import axios from 'axios';
import AddTaskForm from './AddTaskForm';
import { Link } from 'react-router-dom';
import Task from './Task/Task';

const Tasks = ({ onCompletedTask, lists, onEditTitle, onAddTask, withoutEmpty, onRemoveTask, onEditTask }) => {

    const EditTitle = () => {
        const newTitle = window.prompt('Название списка', lists.name);
        if (newTitle) {
            onEditTitle(lists.id, newTitle);
            axios.patch('http://localhost:3001/lists/' + lists.id, {
                name: newTitle
            }).catch(() => {
                alert('Неудалось изменение из-за возниковения ошибки')
            })
        }
    }


    return <div className='tasks'>
        <Link style={{ textDecoration: 'none' }} to={`/lists/${lists.id}`}>
            <h2 style={{ color: lists.color.hex }} className='tasks__title'>
                {lists.name}
                <img onClick={EditTitle} src={editSvg} alt='Edit icon' />
            </h2>
        </Link>

        <div className='tasks__items'>
            {!withoutEmpty && lists.tasks && !lists.tasks.length && <h2>Задачи отсутсвуют</h2>}
            {lists.tasks &&
                lists.tasks.map(task =>
                    <Task
                        onCompleted={onCompletedTask}
                        lists={lists}
                        onRemove={onRemoveTask}
                        onEdit={onEditTask}
                        key={task.id} 
                        {...task} />)}
            <AddTaskForm 
            key={lists.id} 
            onAddTask={onAddTask} 
            lists={lists} />
        </div>
    </div>
}


export default Tasks;