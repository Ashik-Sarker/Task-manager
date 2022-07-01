import React, { useEffect, useState } from 'react';
import Task from './Task';

const CompletedTask = () => {
    const [completedTask, setCompletedTask] = useState([]);
    const [render, setRender] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/completedTasks')
            .then(res => res.json())
            .then(data => setCompletedTask(data))
    }, [render])

    const deleteCompletedTask = (id) => {
        
        const url = `http://localhost:5000/completedTask/${id}`
        fetch(url, {
            method:"DELETE"
        })
            .then(res => res.json())
            .then(data => {
                setRender(!render);
        })
    }
    
    return (
        <div className='m-24'>
            <h1 className='text-2xl mb-12'>Tasks are Completed</h1>
            <div class="grid grid-cols-1 gap-4">
                {
                    completedTask.map(task => < >
                    <div class="bg-primary text-white w-2/4 mx-auto py-2 rounded-full">
                        <div class="flex justify-between items-center mx-6">
                            <h2 class="">{task.name}</h2>
                            <button
                                onClick={()=>deleteCompletedTask(task?._id)}
                                className='btn btn-xs btn-secondary'>X</button>
                        </div>
                    </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default CompletedTask;