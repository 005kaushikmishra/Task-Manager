function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="todo-item">
        <div className="todo-text">{todoName}</div>
        <div className="todo-date">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="todo-delete"
            onClick={() => onDeleteClick(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
