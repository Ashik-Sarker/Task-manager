import React, { useEffect, useState } from 'react';
import Task from './Task';

const ToDo = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/tasks`)
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])
    
    return (
        <div className='mx-32 my-12'>
            <h1 className='mb-8 text-4xl'>Todo Lists</h1>
            <div class="grid grid-cols-1 gap-4 mx-auto">
                    {
                        tasks.map(task => <div class="card bg-primary text-primary-content">
                            <div className='flex justify-around items-center'>
                                <div className='py-2'>
                                    <h2 className='text-xl font-bold text-secondary'>{task?.name}</h2>
                                    <p>{task?.details}</p>
                                    <p>{task?.date}</p>
                                    <span className='text-xs text-slate-300'>Task created Time: {task?.time}</span>

                                </div>
                            </div>
                        </div>)
                    }
            </div>
        </div>
    );
};

export default ToDo;