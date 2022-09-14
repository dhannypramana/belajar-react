import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './style.css';

const generateID = () => {
  return Date.now();
};

const TodoApp = () => {
  const [activity, setActivity] = useState('');
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isActivityEmpty, setIsActivityEmpty] = useState(false);

  const [edit, setEdit] = useState([]);

  const addHandler = e => {
    e.preventDefault();
    
    if (activity.length === 0) {
      setIsActivityEmpty(true);
      return;
    }

    // Edit Mode
    if (edit.id) {
      const filtered = todos.filter(v => v.id !== edit.id);
      const temp = [...filtered, {
        id: edit.id,
        isDone: edit.isDone ? false : true,
        activity,
      }];
      setTodos(temp);
      cancelEditHandler();
      return;
    }

    setIsActivityEmpty(false);

    const temp = [...todos, {
      id: generateID(),
      isDone: false,
      activity,
    }];

    setTodos(temp);
    setLoading(true);
    setActivity('');
  };

  const deleteHandler = todoID => {
    const filtered = todos.filter(e => e.id !== todoID);
    
    setLoading(true);
    setActivity(''); 
    setTodos(filtered);
    setEdit([]);
  };

  const editHandler = activity => {
    setEdit(activity);
    setActivity(activity.activity);
  };

  const cancelEditHandler = () => {
    setEdit([]);
    setActivity('');
    setLoading(true);
  };

  const doneHandler = todo => {
    const updatedTodo = {
      id: todo.id,
      isDone: todo.isDone ? false : true,
      activity: todo.activity,
    };

    const indexEdited = todos.findIndex(v => v.id === todo.id);

    const temp = [
      ...todos,
    ];

    temp[indexEdited] = updatedTodo;
    setTodos(temp);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [loading]);

  return (
    <div className="todo">
      <h1>Todo App</h1>
      {isActivityEmpty && (<p style={{ color: 'red' }} >Aktivitas tidak boleh kosong</p>)}
      <form onSubmit={addHandler}>
        <label>{edit.id ? 'Edit' : 'Add'} Activity</label><br />
        <input className="input-box" type="text" onChange={e => setActivity(e.target.value)} value={activity} autoFocus={true} />
        <button className="btn" type="submit">{edit.id ? 'Edit' : 'Add'} Activity</button>
        {edit.id && <button className="btn" onClick={cancelEditHandler}>Cancel</button>}
      </form>
      {!loading && todos.length === 0 && (<h3>Tidak ada TodoList</h3>)}
      <ul>
        {loading ? (<i>Please Wait</i>) : (todos.map(todo => {
          return <li className="list" key={todo.id}>
            <input type="checkbox" onChange={doneHandler.bind(this, todo)} checked={todo.isDone ? true : false} />
            <div className="activity-title">{todo.isDone ? (<del>{todo.activity}</del>) : (todo.activity)} <br /><i>({todo.isDone ? 'Sudah' : 'Belum'} Selesai)</i></div>
            <button className="btn" onClick={editHandler.bind(this, todo)}>Edit</button>
            <button className="delete-btn" onClick={deleteHandler.bind(this, todo.id)}>Delete</button>
          </li>
        }))}
      </ul>
    </div>
  );
};

export default TodoApp;