import React from 'react';
import useForm from '../../hooks/use-form';

export default function Form(props) {
    let [handleSubmit, handleChange, toggleCompletion, tasks] = useForm(saveFromHook);

    function saveFromHook(formValues) {
        props.createNewTask({
            ...formValues,
            completed: false,
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h3>Add to your list!</h3>
                <div id="task-item">
                    <label>What's your task? </label>
                    <input required type="text" id="task" name="title" onChange={handleChange}></input>
                </div>
                <div id="assigned-to">
                    <label>Whose responsibility? </label>
                    <input required type="text" id="assignee" name="assignee" onChange={handleChange}></input>
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
                <button>Add Task</button>
            </form>

            <div id="todo-list">
                <h3>Task List: {tasks.length} items to complete</h3>
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            <span>{index + 1}. {task.title} - {task.assignee} Completed: {task.completed.toString()}  </span>
                            <button onClick={() => toggleCompletion(index)}>Toggle Completion</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}