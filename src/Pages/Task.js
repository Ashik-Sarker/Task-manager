import React from 'react';

const Task = ({task}) => {
    return (
        <div class="card bg-primary text-primary-content">
            <div class="card-body">
                <h2 class="card-title">{task.name}</h2>
                <div class="card-actions">
                    <button class="btn btn-sm">update task</button>
                </div>
            </div>
        </div>
    );
};

export default Task;