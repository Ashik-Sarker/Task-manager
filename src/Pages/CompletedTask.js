import React, { useEffect, useState } from 'react';
import Task from './Task';

const CompletedTask = () => {
    const [completedTask, setCompletedTask] = useState([]);
    const [render, setRender] = useState(false);

    useEffect(() => {
        fetch('https://serene-thicket-38769.herokuapp.com/completedTasks')
            .then(res => res.json())
            .then(data => setCompletedTask(data))
    }, [render])

    const deleteCompletedTask = (id) => {

        const url = `https://serene-thicket-38769.herokuapp.com/completedTask/${id}`
        fetch(url, {
            method:"DELETE"
        })
            .then(res => res.json())
            .then(data => {
                setRender(!render);
        })
    }
    
    return (
        <div className='mx-6 md:mx-20 my-12'>
            <h1 className='text-3xl mb-12 text-secondary font-bold'>Completed Tasks</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                {
                    completedTask.map(task => < >
                    <div class="bg-primary text-white px-6 py-4 rounded-full">
                        <div class="flex justify-between items-center mx-6">
                            <div>
                                <h2 class="text-secondary text-2xl font-semibold">{task?.name}</h2>
                                <h2 class="">{task?.details}</h2>
                                <h2 class="">{task?.date}</h2>
                            </div>
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