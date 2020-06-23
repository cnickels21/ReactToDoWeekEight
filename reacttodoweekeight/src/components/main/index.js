import React, { useState } from 'react';

export default function Main(props) {
    const { taskCount = 0 } = props;
    let [count, setCount] = useState(taskCount);

    return (
        <main>
            <form>
                <legend>Add to your list!</legend>
                <div id="task-item">
                    <label for="task">What's your task? </label>
                    <input required type="text" default="What's your task?" id="task" ></input>
                </div>
                <div id="assigned-to">
                    <label for="assignee">Who's responsibility? </label>
                    <input required type="text" default="What's your task?" id="assignee" ></input>
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
                <button type="submit">Add Task</button>
            </form>
            <div id="task-list">
                <h3>Task List: {count} items to complete</h3>
                <ul>
                    
                </ul>
            </div>
        </main>
    )
}