import React, { useState } from 'react';

export default function List(props) {
    let [tasks, setTasks] = useState([]);
    let [count, setCount] = useState(0);

    const toggleCompletion = taskToUpdate => {
        let updatedTasks = tasks.map((task, i) => {
            if (i !== taskToUpdate){
                return task;
            }
            return { ...task, completed: !task.completed, };
        });
        setTasks(updatedTasks);
    }

    return (
        <div id="todo-list">
            <h3>Task List: {count} items to complete</h3>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span>{index + 1}. {task.title} - {task.assignee} Completed: {task.completed.toString()}  </span>
                        <button onClick={() => toggleCompletion(index)}>Toggle Completion</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}