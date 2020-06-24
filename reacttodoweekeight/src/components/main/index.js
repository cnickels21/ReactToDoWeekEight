import React, { useState } from 'react';
import Form from './form';
import List from './list';

export default function Main(props) {
    let [tasks, setTasks] = useState({});

    let saveTask = newTask => {
        let newTasks = [...tasks, newTask];
        setTasks(newTasks);
    }

    return (
        <main>
            <Form createNewTask={saveTask}/>
            <List />
        </main>
    )
}