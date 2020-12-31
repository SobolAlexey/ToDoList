import React from 'react';
import '../Tasks.scss';
import editSvg from '../../../images/edit.svg';
import removeSvg from '../../../images/remove.svg'



const Tasks = ({ onRemove, onEdit, lists, id, text, onCompleted, completed }) => {
const onChangeCheckbox = (e) => {
onCompleted(lists.id, id, e.target.checked)
}
    return <div className='tasks__items-row' >
        <div className='checkbox' >
            <input 
            checked={completed}
            onChange={onChangeCheckbox} 
            id={`task-${id}`}
             type='checkbox' />
            <label htmlFor={`task-${id}`} >
                <svg width="11" height="8"
                    viewBox="0 0 11 8" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001"
                        stroke="black" strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round" />
                </svg>
            </label>
        </div>
        <input readOnly value={text} />
        <div className="tasks__items-row-actions">
            <div onClick={() => onEdit(lists.id, {id, text})}>
                <img src={editSvg} alt='edit text' />
            </div>
            <div onClick={() => onRemove(lists.id, id)}>
                <img src={removeSvg} alt='remove text' />
            </div>
        </div>
    </div>
}


export default Tasks;