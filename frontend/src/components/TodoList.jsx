export default function TodoList({ todos, onUpdate, onDelete }) {
  const styles = {
    emptyState: {
      textAlign: 'center',
      padding: '2rem',
      backgroundColor: 'white',
      borderRadius: '0.5rem',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
      marginBottom: '2rem'
    },
    emptyText: {
      fontSize: '1rem',
      color: '#718096'
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    },
    todoItem: {
      backgroundColor: 'white',
      padding: '1.25rem',
      borderRadius: '0.5rem',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
      borderLeft: `4px solid ${todo => todo.completed ? '#48bb78' : '#ecc94b'}`
    },
    todoHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '0.75rem'
    },
    todoName: {
      margin: 0,
      color: '#2d3748',
      textDecoration: todo => todo.completed ? 'line-through' : 'none',
      opacity: todo => todo.completed ? 0.7 : 1
    },
    actions: {
      display: 'flex',
      gap: '0.75rem',
      alignItems: 'center'
    },
    checkbox: {
      width: '1.25rem',
      height: '1.25rem',
      accentColor: '#48bb78',
      cursor: 'pointer'
    },
    deleteButton: {
      backgroundColor: '#f56565',
      color: 'white',
      border: 'none',
      borderRadius: '0.25rem',
      padding: '0.375rem 0.75rem',
      cursor: 'pointer',
      fontSize: '0.875rem',
      transition: 'background-color 0.2s'
    },
    todoDescription: {
      margin: '0.5rem 0 0',
      color: '#4a5568',
      fontStyle: todo => todo.completed ? 'italic' : 'normal',
      fontSize: '0.9375rem'
    }
  };

  if (todos.length === 0) {
    return (
      <div style={styles.emptyState}>
        <p style={styles.emptyText}>No todos yet. Add your first task above!</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {todos.map(todo => (
        <div
          key={todo._id}
          style={{
            ...styles.todoItem,
            borderLeft: `4px solid ${todo.completed ? '#48bb78' : '#ecc94b'}`
          }}
        >
          <div style={styles.todoHeader}>
            <h3 style={{
              ...styles.todoName,
              textDecoration: todo.completed ? 'line-through' : 'none',
              opacity: todo.completed ? 0.7 : 1
            }}>
              {todo.name}
            </h3>
            <div style={styles.actions}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onUpdate(todo._id, { completed: !todo.completed })}
                style={styles.checkbox}
              />
              <button
                onClick={() => onDelete(todo._id)}
                style={styles.deleteButton}
                onMouseOver={(e) => e.target.style.backgroundColor = '#e53e3e'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#f56565'}
              >
                Delete
              </button>
            </div>
          </div>
          {todo.desc && (
            <p style={{
              ...styles.todoDescription,
              fontStyle: todo.completed ? 'italic' : 'normal'
            }}>
              {todo.desc}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
