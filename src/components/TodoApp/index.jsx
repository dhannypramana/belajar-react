import React, { useEffect, useState } from 'react';
import './index.css';

const TodoApp = () => {
  const [activity, setActivity] = useState('');
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState({});
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');

  const generateID = () => {
    return Date.now();
  };

  const todoHandler = e => {
    e.preventDefault();
    setErr('');
    setLoading(true);

    if (edit.id) {
      const updatedTodo = {
        id: edit.id,
        activity,
      };

      const editTodoIndex = todos.findIndex(todo => todo.id === edit.id);

      const updatedTodos = [
        ...todos
      ];

      updatedTodos[editTodoIndex] = updatedTodo;

      setTodos(updatedTodos);
      setActivity('');
      setEdit({});

      return;
    }

    if (activity.length === 0) {
      return setErr('Aktivitas tidak boleh kosong');
    } else {
      setTodos([...todos, {
        id: generateID(),
        activity,
      }]);
    }
    setActivity('');
  };

  const deleteTodoHandler = todoID => {
    const filtered = todos.filter(todo => {
      return todo.id !== todoID
    });
    setLoading(true);
    setTodos(filtered);
    setEdit({});
    setActivity('');
  };

  const editTodoHandler = todo => {
    setActivity(todo.activity);
    setEdit(todo);
  };

  const cancelEditHandler = edit => {
    setActivity(edit.activity);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [loading]);

  return (
    <>
      <h1>Todo App</h1>
      {err && (<p style={{ color: 'red' }}>{err}</p>)}
      <form onSubmit={todoHandler}>
        <label>Activity</label><br />
        <input type="text" value={activity} onChange={e => setActivity(e.target.value)} placeholder="Add New Activity" className="input-box" />
        {edit.id && (<button onClick={cancelEditHandler.bind(this, edit)} className='btn'>Cancel</button>)}
        <button className="btn">{edit.id ? 'Edit Activity' : 'Add Activity'}</button>
      </form>
      {
        todos.length > 0 ? 
          <div className="list">
            <ul>
              {loading ? (<i>Please Wait...</i>) : 
                todos.map(item =>
                  <li key={item.id}>{item.activity}
                    <button style={{ marginLeft: '10px' }} onClick={editTodoHandler.bind(this, item)} className='btn'>Edit</button>
                    <button className='btn' onClick={deleteTodoHandler.bind(this, item.id)}>Delete</button>
                  </li>)}
            </ul>
          </div> : 
          <h3>Tidak Ada Todo</h3>
      }
    </>
  );
};

export default TodoApp;