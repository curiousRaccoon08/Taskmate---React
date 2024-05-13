import React, { useState } from "react";

const ShowTask = ({
  tasklist,
  setTasklist,
  task,
  setTask,
  updateFlag,
  setUpdateFlag,
}) => {
  const [completeFlag, setCompleteFlag] = useState(false);

  const handleDelete = (id) => {
    setTasklist(tasklist.filter((task) => task.id !== id));
  };

  const handleEdit = (id) => {
    const selectedTask = tasklist.find((todo) => todo.id === id);
    if (selectedTask) {
      setTask(selectedTask);
    }
    setUpdateFlag(true);
  };

  const handleComplete = (id) => {
    setCompleteFlag(!completeFlag);
    const selectedTask = tasklist.find((todo) => todo.id === id);

    if (selectedTask) {
      const updatedTasklist = tasklist.map((todo) =>
        todo.id === selectedTask.id
          ? {
              ...todo,
              completed: completeFlag,
            }
          : todo
      );

      setTasklist(updatedTasklist);
    }
  };

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{tasklist.length}</span>
        </div>
        <button className="clearAll" onClick={() => setTasklist([])}>
          Clear All
        </button>
      </div>
      <ul>
        {tasklist &&
          tasklist.map((todo) => (
            <li key={todo.id} className={todo.completed ? "completed" : ""}>
              <p>
                <span className="name">{todo.name}</span>
                {todo.completed === false ? (
                  <span className="time">{todo.time}</span>
                ) : (
                  <span className="completed">Completed</span>
                )}
              </p>
              <i
                className="bi bi-pencil-square"
                onClick={() => handleEdit(todo.id)}
              ></i>
              <i
                class="bi bi-award"
                onClick={() => handleComplete(todo.id)}
              ></i>
              <i
                className="bi bi-trash"
                onClick={() => {
                  handleDelete(todo.id);
                }}
              ></i>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default ShowTask;
