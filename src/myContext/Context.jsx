import React, { createContext, useState} from "react";

export const MyContext = createContext(null);

export const Context = ({ children }) => {

  const [tasks, setTasks] = useState(["React"]);
  const [name, setName] = useState("");
  
    const handleAddNewTask = () => {
    const item = [...tasks, name];
    setTasks(item);
  };

    
  return (
    <div>
    <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAddNewTask}>Create new task</button>
      <MyContext.Provider value={tasks}>{children}</MyContext.Provider>
    </div>
  );
};

export default Context;
