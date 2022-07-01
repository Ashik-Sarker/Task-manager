import React from 'react';

const EditTask = ({ updatedTask, setUpdatedTask }) => {

    const handleSubmit = event => {
        event.preventDefault();
        const name = event.target.updatedName.value;
        const details = event.target.updatedDetails.value;
        const date = event.target.updatedDate.value;
        
        const UpdatedInfo = { name, details, date };
        const url = `http://localhost:5000/task/${updatedTask?._id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(UpdatedInfo)
        })
            .then(res => res.json())
            .then(data => {
            console.log(data);
        })

        setUpdatedTask(null);
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-1" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="my-modal-1" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg mb-4 text-secondary">{updatedTask?.name}</h3>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="updatedName" placeholder="Update Task Name" class="input input-bordered input-secondary w-full max-w-xs mb-4" required/>
                        
                        <input type="text" name="updatedDetails" placeholder="Update Task Details" class="input input-bordered input-secondary w-full max-w-xs mb-4" />
                        
                        <input type="date" name="updatedDate" placeholder="Update Task Date" class="input input-bordered input-secondary w-full max-w-xs" />

                        <input type="submit" class="btn btn-secondary w-full max-w-xs mt-4" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditTask;