import { useState, useEffect } from 'react';
import { getTodos, createTodo, updateTodo, deleteTodo } from '../api';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

export default function HomePage({ user }) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const token = localStorage.getItem('token');
        const todosData = await getTodos(token);
        setTodos(todosData);
      } catch (error) {
        console.error('Failed to fetch todos:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTodos();
  }, [user]);

  const handleAddTodo = async (todo) => {
    try {
      const token = localStorage.getItem('token');
      const newTodo = await createTodo(todo, token);
      setTodos([...todos, newTodo]);
    } catch (error) {
      console.error('Failed to add todo:', error);
    }
  };

  const handleUpdateTodo = async (id, updates) => {
    try {
      const token = localStorage.getItem('token');
      const updatedTodo = await updateTodo(id, updates, token);
      setTodos(todos.map(todo =>
        todo._id === id ? updatedTodo : todo
      ));
    } catch (error) {
      console.error('Failed to update todo:', error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await deleteTodo(id, token);
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (error) {
      console.error('Failed to delete todo:', error);
    }
  };

  if (loading) {
    return <div style={{ textAlign: 'center', marginTop: '20px' }}>Loading todos...</div>;
  }

  return (
    <div>
  <h1 style={{
    textAlign: 'center',
    marginBottom: '1.5rem',
    color: '#4299e1',
    fontWeight: '500',
    fontSize: '1.5rem'
  }}>
    Welcome back, {user.name}!
  </h1>
  <TodoForm onSubmit={handleAddTodo} />
  <TodoList
    todos={todos}
    onUpdate={handleUpdateTodo}
    onDelete={handleDeleteTodo}
  />
</div>
  );
}
