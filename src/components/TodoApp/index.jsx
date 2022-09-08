import React, { useEffect, useRef, useState } from 'react';
import './index.css';

const TodoApp = () => {
  const [activity, setActivity] = useState('');
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode]= useState(false);

  const title = useRef('');
  const list = useRef('');
  const label = useRef('');

  const modeHandler = () => {
    if (darkMode) {
      setDarkMode(false);
      document.body.style.backgroundColor = "white";
      title.current.style.color = "black";
      list.current.style.color = "black";
      label.current.style.color = "black";
    } else {
      setDarkMode(true);
      document.body.style.backgroundColor = "black";
      title.current.style.color = "white";
      list.current.style.color = "white";
      label.current.style.color = "white";
    }
  };

  const todoHandler = e => {
    e.preventDefault();
    setLoading(true);
    if (activity.length === 0) {
      return;
    } else {
      setTodos([...todos, activity]);
    }
    setActivity('');
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [loading]);

  return (
    <>
      <button onClick={modeHandler}>{darkMode ? ('Light Mode') : ('Dark Mode')}</button>
      <h1 ref={title}>Todo App</h1>
      <form onSubmit={todoHandler}>
        <label ref={label}>Activity</label><br />
        <input type="text" value={activity} onChange={e => setActivity(e.target.value)} placeholder="Add New Activity" className="input-box" />
        <button className="btn">Add Activity</button>
      </form>
        <div className="list">
          <ul ref={list}>
            {loading ? (<i>Please Wait...</i>) : 
              todos.map(item => <li key={item}>{item}</li>)}
          </ul>
        </div>
    </>
  );
};

export default TodoApp;