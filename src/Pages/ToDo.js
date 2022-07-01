import React, { useEffect, useState } from 'react';

const ToDo = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch(`https://serene-thicket-38769.herokuapp.com/tasks`)
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])
    
    return (
        <div className='mx-8 md:mx-20 my-12'>
            <h1 className='mb-8 text-4xl font-bold '>Todo Lists</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
                    {
                        tasks.map(task => <div class="card bg-primary text-primary-content">
                            <div className=''>
                                <div className="mx-6 py-4">
                                    <h2 className='text-2xl font-bold text-secondary mb-2'>{task?.name}</h2>
                                    <p className=' text-sm'>{task?.details}</p>
                                    <p className='my-1'>{task?.date}</p>
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