import React from "react";
import { GlobalContext } from './context/GlobalContext'

import ListItem from "./ListItem";


const List = () => {

  const [tasks, setTasks] = React.useContext(GlobalContext)

  function handleRemove(index: number) {
    const initialTasks = [...tasks];
    initialTasks.splice(index, 1);
    setTasks(initialTasks);
  }

  function handleDone(index: number) {
    const initialTasks = [...tasks];
    initialTasks[index].isCompleted = !initialTasks[index].isCompleted;
    setTasks(initialTasks);
  }

  return (
    <div className="task__list">
      {tasks.length === 0 ? (
        "Start by adding task here"
      ) : (
          <ul>
            {tasks.map((task: any, index: number) => (
              <ListItem
                key={index}
                index={index + 1}
                name={task.name}
                reps={task.reps}
                sets={task.sets}
                rest={task.rest}
                isCompleted={task.isCompleted}
                handleRemove={() => handleRemove(index)}
                handleDone={() => handleDone(index)}
              />
            ))}
          </ul>
        )}
    </div>
  );
};

export default List;
