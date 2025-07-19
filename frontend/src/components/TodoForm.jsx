import { useState } from 'react';

export default function TodoForm({ onSubmit }) {
  const [todo, setTodo] = useState({
    name: '',
    desc: '',
    completed: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTodo({
      ...todo,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(todo);
    setTodo({
      name: '',
      desc: '',
      completed: false
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{
      marginBottom: '2rem',
      padding: '1.5rem',
      backgroundColor: 'white',
      borderRadius: '0.5rem',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
    }}>
      <div style={{ marginBottom: '1rem' }}>
        <label style={{
          display: 'block',
          marginBottom: '0.5rem',
          fontWeight: '500',
          color: '#4a5568'
        }}>
          Todo Name
        </label>
        <input
          type="text"
          name="name"
          value={todo.name}
          onChange={handleChange}
          placeholder="What needs to be done?"
          required
          style={{
            width: '100%',
            padding: '0.75rem',
            borderRadius: '0.375rem',
            border: '1px solid #e2e8f0',
            fontSize: '1rem',
            backgroundColor: '#f8fafc'
          }}
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label style={{
          display: 'block',
          marginBottom: '0.5rem',
          fontWeight: '500',
          color: '#4a5568'
        }}>
          Description
        </label>
        <textarea
          name="desc"
          value={todo.desc}
          onChange={handleChange}
          placeholder="Add some details..."
          style={{
            width: '100%',
            padding: '0.75rem',
            borderRadius: '0.375rem',
            border: '1px solid #e2e8f0',
            minHeight: '6rem',
            fontSize: '1rem',
            resize: 'vertical',
            backgroundColor: '#f8fafc'
          }}
        />
      </div>

      <div style={{
        marginBottom: '1.5rem',
        display: 'flex',
        alignItems: 'center'
      }}>
        <input
          type="checkbox"
          name="completed"
          checked={todo.completed}
          onChange={handleChange}
          id="completed"
          style={{
            marginRight: '0.75rem',
            width: '1.25rem',
            height: '1.25rem',
            accentColor: '#4299e1'
          }}
        />
        <label
          htmlFor="completed"
          style={{
            fontSize: '1rem',
            color: '#4a5568'
          }}
        >
          Mark as completed
        </label>
      </div>

      <button
        type="submit"
        style={{
          backgroundColor: '#4299e1',
          color: 'white',
          padding: '0.875rem',
          border: 'none',
          borderRadius: '0.375rem',
          cursor: 'pointer',
          fontSize: '1rem',
          fontWeight: '600',
          width: '100%',
          transition: 'background-color 0.2s'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#3182ce'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#4299e1'}
      >
        Add Todo
      </button>
    </form>
  );
}
