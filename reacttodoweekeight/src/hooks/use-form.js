import { useState } from 'react';

export default function useForm(onSubmit) {
    let [tasks, setTasks] = useState({});

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

    return [
        handleSubmit,
        handleChange,
        tasks,
    ]
}