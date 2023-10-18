import { createContext, useState } from "react";
import "./App.css";
import ComponentA from "./myContext/ComponentA";

export const Context = createContext(null);

function App() {
  const [tasks, setTasks] = useState(["React"]);
  const [name, setName] = useState("");

  const handleAddNewTask = () => {
    const item = [...tasks, name];
    setTasks(item);
  };

  return (
    <Context.Provider value={tasks}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleAddNewTask}>Create new task</button>

      <ComponentA />
    </Context.Provider>
  );
}

export default App;
