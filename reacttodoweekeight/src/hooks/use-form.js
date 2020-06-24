import { useState } from 'react';

export default function useForm(onSubmit) {
    let [tasks, setTasks] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(tasks);
        e.target.reset();
    }

    const handleChange = e => {
        const { title, value } = e.target;
        setTasks(values => ({
            ...values,
            [title]: value,
        }));
    }
    const toggleCompletion = taskToUpdate => {
        let updatedTasks = tasks.map((task, i) => {
            if (i !== taskToUpdate){
                return task;
            }
            return { ...task, completed: !task.completed, };
        });
        setTasks(updatedTasks);
    }

    return [
        handleSubmit,
        handleChange,
        toggleCompletion,
        tasks,
    ]
}