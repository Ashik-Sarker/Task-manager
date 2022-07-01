import React, { useEffect, useState } from 'react';
import EditTask from './EditTask';

const Home = () => {

    const [tasks, setTasks] = useState([]);
    const [render, setRender] = useState(false);
    const [updatedTask, setUpdatedTask] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/tasks`)
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [updatedTask, render])

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const name = event.target.name.value;

        if (name === '') {
            alert('please enter a input');
            return;
        }
        const newTask = { name }
        
        console.log(newTask);
        fetch(`http://localhost:5000/task`, {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(newTask)
        })
            .then(res => res.json())
            .then(data => {
                setRender(!render);
        })
    }

    const deleteTask = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/task/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
            setRender(!render);
            console.log(data);
        })
    }


    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold mb-8">Add Task now!</h1>
                
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        name='name'
                                        placeholder="Task name" class="input input-bordered w-full max-w-xs" /><br />
                    
                                    <input type="submit" className='btn w-48 mt-4 btn-primary'/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ToDo List */}
            <div className='mx-32 my-12'>
                <h1 className='mb-8 text-4xl'>Todo Lists</h1>
                <div class="grid grid-cols-1 gap-4 mx-auto">
                    {
                        tasks.map(task => <div class="card bg-primary text-primary-content">
                            <div className='flex justify-around items-center'>
                                <div
                                    onClick={()=>deleteTask(task._id)}
                                    class="form-control">
                                    <label class="cursor-pointer label">
                                        <input type="checkbox" checked="checked" class="checkbox checkbox-secondary" />
                                    </label>
                                </div>
                                <h2>{task?.name}</h2>
                                <label
                                    onClick={() => setUpdatedTask(task)} 
                                    for="my-modal-1"
                                    class="btn btn-xs btn-secondary">Edit Task</label>
                            </div>
                        </div>)
                    }
                </div>
                {updatedTask && <EditTask
                    setUpdatedTask={setUpdatedTask}
                    updatedTask={updatedTask}></EditTask>}
            </div>

        </div>
    );
};

export default Home;