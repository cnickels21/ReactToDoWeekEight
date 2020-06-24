import React, { useState, useEffect } from 'react';

export default function Main() {
    let [count, setCount] = useState(0);
    let [title, setTitle] = useState("");
    let [tasks, setTasks] = useState([]);
    let [assignee, setAssignee] = useState('');

    const updateTitle = e => setTitle(e.target.value);
    const updateAssignee = e => setAssignee(e.target.value);


    const saveTask = e => {
        e.preventDefault();

        setCount(count + 1);

        let newTasks = [...tasks, { title, completed: false, assignee }];
        setTasks(newTasks);
        e.target.reset();
    }

    // Doesnt actually toggle yet, can only switch from false to true
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
        <main>
            <form onSubmit={saveTask}>
                <h3>Add to your list!</h3>
                <div id="task-item">
                    <label>What's your task? </label>
                    <input required type="text" id="task" onChange={updateTitle}></input>
                </div>
                <div id="assigned-to">
                    <label>Whose responsibility? </label>
                    <input required type="text" id="assignee" onChange={updateAssignee}></input>
                </div>
                <fieldset>
                    <legend>Difficulty</legend>
                    <label>1</label>
                    <input type="radio" name="difficulty" value="1" id="easier" />
                    <label>2</label>
                    <input type="radio" name="difficulty" value="2" id="easy" />
                    <label>3</label>
                    <input type="radio" name="difficulty" value="3" id="med" />
                    <label>4</label>
                    <input type="radio" name="difficulty" value="4" id="hard" />
                    <label>5</label>
                    <input type="radio" name="difficulty" value="5" id="harder" />
                </fieldset>
                <button type="submit">Add Task</button>
            </form>

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
        </main>
    )
}