import React, { useEffect, useState } from 'react';
import './index.css';

const TodoApp = () => {
  const [activity, setActivity] = useState('');
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState({});
  const [loading, setLoading] = useState(false);

  const generateID = () => {
    return Date.now();
  };

  const todoHandler = e => {
    e.preventDefault();
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
      return;
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
  };

  const editTodoHandler = todo => {
    setActivity(todo.activity);
    setEdit(todo);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [loading]);

  return (
    <>
      <h1>Todo App</h1>
      <form onSubmit={todoHandler}>
        <label>Activity</label><br />
        <input type="text" value={activity} onChange={e => setActivity(e.target.value)} placeholder="Add New Activity" className="input-box" />
        <button className="btn">{edit.id ? 'Edit Activity' : 'Add Activity'}</button>
      </form>
        <div className="list">
          <ul>
            {loading ? (<i>Please Wait...</i>) : 
              todos.map(item =>
                <li key={item.id}>{item.activity}
                  <button style={{ marginLeft: '10px' }} onClick={editTodoHandler.bind(this, item)} className='btn'>Edit</button>
                  <button className='btn' onClick={deleteTodoHandler.bind(this, item.id)}>Delete</button>
                </li>)}
          </ul>
        </div>
    </>
  );
};

export default TodoApp;