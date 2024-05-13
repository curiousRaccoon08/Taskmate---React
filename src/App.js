import { useEffect, useState } from "react";
import "./App.css";
import Addtask from "./components/Addtask";
import Header from "./components/Header";
import ShowTask from "./components/ShowTask";

function App() {
  const [tasklist, setTasklist] = useState(
    JSON.parse(localStorage.getItem("tasklist")) || []
  );
  const [task, setTask] = useState({});
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || "light"
  );
  const [updateFlag, setUpdateFlag] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [tasklist, theme]);

  return (
    <div className="App">
      <Header theme={theme} setTheme={setTheme} />
      <Addtask
        tasklist={tasklist}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
        updateFlag={updateFlag}
        setUpdateFlag={setUpdateFlag}
      />
      <ShowTask
        tasklist={tasklist}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
        updateFlag={updateFlag}
        setUpdateFlag={setUpdateFlag}
      />
    </div>
  );
}

export default App;
