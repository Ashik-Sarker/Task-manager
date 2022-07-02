import React, { useEffect, useState } from 'react';
import EditTask from './EditTask';

const Home = () => {

    const [tasks, setTasks] = useState([]);
    const [render, setRender] = useState(false);
    const [updatedTask, setUpdatedTask] = useState({});

    useEffect(() => {
        fetch(`https://serene-thicket-38769.herokuapp.com/tasks`)
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [render])

    const handleSubmit = (event) => {
        event.preventDefault();
        const current = new Date();
        
        const name = event.target.name.value;
        const details = event.target.details.value;
        const date = event.target.date.value ? event.target.date.value : current.getFullYear() + '-' + current.getMonth() + '-' + current.getDate();
        const time = current.getHours() + ':' + current.getMinutes() + ':' + current.getSeconds();
        // console.log(time);
        event.target.reset();
        const newTask = { name, details, date, time}
        
        console.log(newTask);
        fetch(`https://serene-thicket-38769.herokuapp.com/task`, {
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
        fetch(`https://serene-thicket-38769.herokuapp.com/task/${id}`, {
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
                        <h1 class="text-5xl font-bold mb-8">Create your Own Task now...</h1>
                
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        name='name'
                                        placeholder="Task name" class="input input-bordered w-full max-w-xs" required/><br />
                                    <input
                                        type="text"
                                        name='details'
                                        placeholder="Task details" class="mt-4 input input-bordered w-full max-w-xs" /><br />
                                    <input
                                        type="date"
                                        name='date'class="mt-4 input input-bordered w-full max-w-xs" /><br />
                    
                                    <input type="submit" className='btn w-48 mt-4 btn-primary'/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ToDo List */}
            <div className='mx-10 md:mx-32 my-12'>
                <h1 className='mb-12 text-5xl font-bold '>Todo Lists</h1>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {
                        tasks.map(task => <div class="card bg-primary text-primary-content">
                            <div className='flex justify-between items-center p-4'>
                                <div
                                    onClick={()=>deleteTask(task._id)}
                                    class="form-control mr-8">
                                    <label class="cursor-pointer label">
                                        <input type="checkbox" checked="checked" class="checkbox checkbox-secondary
    
                                        " />
                                    </label>
                                </div>
                                <div className='w-3/5'>
                                    <h2 className='text-2xl text-secondary font-bold mb-2'>{task?.name}</h2>
                                    <small className='text-sm text-slate-100'>{task?.details && task?.details}</small>
                                    <p className='my-2 text-slate-200'>{task?.date && task?.date}</p>
                                    <small className='text-slate-300'>Task Create Time: {task?.time && task?.time }</small>
                                </div>
                                <label
                                    onClick={() => setUpdatedTask(task)} 
                                    for="my-modal-1"
                                    class="btn h-full btn-outline btn-secondary">Edit Task</label>
                            </div>
                        </div>)
                    }
                </div>
                {updatedTask && <EditTask
                    setUpdatedTask={setUpdatedTask}
                    updatedTask={updatedTask}
                    render={render}
                    setRender={setRender}
                ></EditTask>}
            </div>
        </div>
    );
};

export default Home;