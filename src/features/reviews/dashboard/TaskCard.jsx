import React, { useState } from "react";
import MoreOptionCard from "../../components/MoreOptionCard"; // Import the MoreOptionCard component
import { IoIosMore } from "../../assets/assets";

const Task = ({ task, onToggleComplete, isLast, color }) => {
  return (
    <li className="relative pb-2">
      {!isLast && (
        <span
          className="absolute left-2 top-8 -ml-px h-full w-0.5 bg-gray-200"
          aria-hidden="true"
        />
      )}
      <div className="relative flex space-x-3">
        {/* Custom Checkbox (replaces the icon) */}
        <div>
          <input
            type="checkbox"
            className="appearance-none w-[18px] h-[18px] bg-customG border border-[#e7e7e7] rounded-md focus:ring-yellow-400 focus:ring-2 checked:bg-yellow-500 checked:border-yellow-500 checked:before:block checked:before:w-2 checked:before:h-4 checked:before:border-white checked:before:border-solid checked:before:border-r-2 checked:before:border-b-2 checked:before:rotate-45 checked:before:translate-x-1.5 checked:before:translate-y-0.5"
            checked={task.completed}
            onChange={onToggleComplete}
          />
        </div>
        <div
          className={`ml-3 flex-1 flex px-3 py-1.5 flex-col rounded-md items-start self-stretch ${
            task.completed ? "bg-gray-200" : `bg-${color}`
          }`}
        >
          <div className="flex justify-between w-full">
            <h6
              className={`text-[10px] font-normal leading-[140%] text-customGray ${
                task.completed ? "line-through" : ""
              }`}
            >
              {task.date}
            </h6>
            <IoIosMore />
          </div>

          <p
            className={`mt-1 text-[11px]  font-normal leading-[140%] text-customBlack ${
              task.completed ? "line-through" : ""
            }`}
          >
            {task.text}
          </p>
        </div>
      </div>
    </li>
  );
};

const TaskList = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      date: "June 19, 2028",
      text: "Restock Housekeeping Supplies on 3rd Floor",
      datetime: "2028-06-19",
      completed: false,
      color: "customBlue",
    },
    {
      id: 2,
      date: "June 19, 2028",
      text: "Restock Housekeeping Supplies on 3rd Floor",
      datetime: "2028-06-19",
      completed: false,
      color: "customYellow",
    },
    {
      id: 3,
      date: "June 20, 2028",
      text: "Inspect and Clean the Pool Area",
      datetime: "2028-06-20",
      completed: false,
      color: "customBlue",
    },
    {
      id: 4,
      date: "June 20, 2028",
      text: "Check-In Assistance During Peak Hours (4 PM - 6 PM)",
      datetime: "2028-06-20",
      completed: false,
      color: "customBlue",
    },
  ]);

  const addTask = () => {
    const newTask = {
      id: Date.now(),
      date: "New Task Date",
      text: "New Task Description",
      datetime: "2028-06-21",
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <MoreOptionCard title="Task List" add={true} onAddTask={addTask}>
      <div className="max-h-80 overflow-y-scroll hide-scrollbar">
        <ul role="list" className="flex flex-col gap-[8px]">
          {tasks.map((task, index) => (
            <Task
              color={task.color}
              key={task.id}
              task={task}
              onToggleComplete={() => toggleComplete(task.id)}
              isLast={index === tasks.length - 1}
            />
          ))}
        </ul>
      </div>
    </MoreOptionCard>
  );
};

export default TaskList;
