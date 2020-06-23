import React, { useState, useEffect } from 'react';

export default function Main(props) {
    const { taskCount = 0 } = props;
    const { taskTitle = "" } = props;

    let [count, setCount] = useState(taskCount);
    let [title, setTitle] = useState(taskTitle);
    let [tasks, setTasks] = useState([]);
    let [assignee, setAssignee] = useState('');

    const updateTitle = e => setTitle(e.target.title);

    const saveTask = e => {
        e.preventDefault();

        setCount(count + 1);

        let newTasks = [...tasks, { title, completed: false }];
        setTasks(newTasks);
        e.target.reset();
    }

    return (
        <main>
            <form>
                <h3>Add to your list!</h3>
                <div id="task-item">
                    <label for="task">What's your task? </label>
                    <input required type="text" id="task" onChange={updateTitle}></input>
                </div>
                <div id="assigned-to">
                    <label for="assignee">Who's responsibility? </label>
                    <input required type="text" id="assignee" ></input>
                </div>
                <fieldset>
                    <legend>Difficulty</legend>
                    <label for="easier">1</label>
                    <input type="radio" name="difficulty" value="1" id="easier" required/>
                    <label for="easy">2</label>
                    <input type="radio" name="difficulty" value="2" id="easy" />
                    <label for="med">3</label>
                    <input type="radio" name="difficulty" value="3" id="med" />
                    <label for="hard">4</label>
                    <input type="radio" name="difficulty" value="4" id="hard" />
                    <label for="harder">5</label>
                    <input type="radio" name="difficulty" value="5" id="harder" />
                </fieldset>
                <button type="submit" onSubmit={saveTask}>Add Task</button>
            </form>

            <div id="todo-list">
                <h3>Task List: {count} items to complete</h3>
                <ul>
                    {tasks.map((task, index) => (
                        <li>
                            {task.title} - {task.assignee} (Completed: {task.completed.toString()})
                            <button>Toggle Completion</button>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}