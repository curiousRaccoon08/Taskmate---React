import React from "react";

const Addtask = ({
  tasklist,
  setTasklist,
  task,
  setTask,
  updateFlag,
  setUpdateFlag,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.id) {
      const date = new Date();
      const updatedTasklist = tasklist.map((todo) => {
        return todo.id === task.id
          ? {
              id: task.id,
              name: task.name,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
              completed: false,
            }
          : todo;
      });
      setTasklist(updatedTasklist);
      setTask({});
    } else {
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
        completed: false,
      };
      setTasklist([...tasklist, newTask]);
      setTask({});
    }
    setUpdateFlag(false);
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={task.name || ""}
          autoComplete="off"
          placeholder="add task"
          maxLength="25"
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <button type="submit">{updateFlag ? "Update" : "Add"}</button>
      </form>
    </section>
  );
};

export default Addtask;
