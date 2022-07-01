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
                                <div class="form-control">
                                    <label class="cursor-pointer label">
                                        <input type="checkbox" checked="checked" class="checkbox checkbox-secondary" />
                                    </label>
                                </div>
                                <h2>{task?.name}</h2>
                                <button className='btn btn-xs btn-secondary'>Edit</button>
                            </div>
                        </div>)
                    }
            </div>
        </div>
    );
};

export default ToDo;