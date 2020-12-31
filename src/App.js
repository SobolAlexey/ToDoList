import axios from 'axios';
import React, { useState, useEffect } from 'react';

import './App.scss';
import List from './Components/List/List.jsx'
import AddButtonList from './Components/AddListButton/AddButtonList';
import Tasks from './Components/Tasks/Tasks';
import listImg from './images/list.svg';
import { Route, useHistory } from 'react-router-dom';


function App() {
  const [lists, setLists] = useState(null);
  const [colors, setColors] = useState(null);
  const [activeItem, setActiveItem] = useState(null);

  let history = useHistory();

  useEffect(() => {
    axios
      .get('http://localhost:3001/lists?_expand=color&_embed=tasks')
      .then(({ data }) => {
        setLists(data);
      });
    axios.get('http://localhost:3001/colors').then(({ data }) => {
      setColors(data);
    });
  }, []);



  const onAddLists = obj => {
    const newList = [...lists, obj];
    setLists(newList);

  };

  const onEditListTitle = (id, title) => {
    const newList = lists.map(item => {
      if (item.id === id) {
        item.name = title;
      }
      return item;
    })
    setLists(newList);
  }
  const onAddTask = (listId, taskObj) => {
    const newList = lists.map(item => {
      if (item.id === listId) {
        item.tasks = [...item.tasks, taskObj];
      }
      return item;
    })
    setLists(newList);
  }
  const onRemoveTask = (listId, taskId) => {
    if (window.confirm('Вы действительно хотите удалить задачу')) {
      const newList = lists.map(item => {
        if (item.id === listId) {
          item.tasks = item.tasks.filter(task => task.id !== taskId)
        }
        return item;
      });
      setLists(newList);
      axios.delete('http://localhost:3001/tasks/' + taskId)
        .catch(() => {
          alert('Не удалось удалить задачу')
        })
    }
  };

  const onEditTask = (listId, taskObj) => {
    const newTaskText = window.prompt('Текст Задачи', taskObj.text);
    if (!newTaskText) {
      return;
    }
    const newList = lists.map(list => {
      if (list.id === listId) {
        list.tasks = list.tasks.map(task => {
          if (task.id === taskObj.id) {
            task.text = newTaskText;
          }
          return task;
        })
      }
      return list;
    });
    setLists(newList);
    axios.patch('http://localhost:3001/tasks/' + taskObj.id, {
      text: newTaskText
    })
      .catch(() => {
        alert('Не удалось изменить задачу')
      })
  };
  const onCompletedTask = (listId, taskId, completed) => {
    const newList = lists.map(list => {
      if (list.id === listId) {
        list.tasks = list.tasks.map(task => {
          if (task.id === taskId) {
            task.completed = completed;
          }
          return task;
        })
      }
      return list;
    });
    setLists(newList);

    axios.patch('http://localhost:3001/tasks/' + taskId, {
      completed
    })
      .catch(() => {
        alert('Не удалось отметить что задача выполнена')
      })
  }

  useEffect(() => {
    const listId = history.location.pathname.split('lists/')[1];
    if (lists) {
      const list = lists.find(list => list.id === Number(listId));
      setActiveItem(list);
    }
    
  }, [lists, history.location.pathname]);

  return (
    <div className='todo'>
      <div className='sidebar'>
        <List
          onClickItem={list => {
            history.push(`/`);
           
          }}
          items={[{
            active: history.location.pathname === '/',
            icon: (<img src={listImg} alt='List icon' width='18px' height='18px' />),
            name: 'Все задачи',
          },]} />

        {lists
          ? (<List
            items={lists}
            isRemovable
            onRemove={id => {
              const newLists = lists.filter(item => item.id !== id);
              setLists(newLists);
            }}

            onClickItem={list => {
              history.push(`/lists/${list.id}`);
            setActiveItem(list)
            }}

            activeItem={activeItem}
          />)
          : '...Загрузка'}

        <AddButtonList onAdd={onAddLists} colors={colors} />
      </div>

      <div className='todo__tasks'>
        <Route exact path="/">
          {lists &&
            lists.map(lists => (
              <Tasks
                onCompletedTask={onCompletedTask}
                onRemoveTask={onRemoveTask}
                onEditTask={onEditTask}
                key={lists.id}
                lists={lists}
                onAddTask={onAddTask}
                onEditTitle={onEditListTitle}
                withoutEmpty />
            ))}
        </Route>
        <Route path='/lists/:id'>
          {lists && activeItem &&
            (<Tasks
              onCompletedTask={onCompletedTask}
              onEditTask={onEditTask}
              onRemoveTask={onRemoveTask}
              onAddTask={onAddTask}
              onEditTitle={onEditListTitle}
              lists={activeItem} />)}
        </Route>
      </div>
    </div>
  );
}

export default App;
