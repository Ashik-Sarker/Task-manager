import React from 'react';
import Task from './Task';

const CompletedTask = () => {
    const tasks = [
        {id:1, name:"task-1"},
        {id:2, name:"task-2"},
        {id:3, name:"task-3"}
    ]
    return (
        <div className='m-24'>
            <h1>this is to do</h1>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    tasks.map(task => <>
                    <div class="card bg-primary text-primary-content">
                        <div class="card-body">
                            <h2 class="card-title">{task.name}</h2>
                        </div>
                    </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default CompletedTask;