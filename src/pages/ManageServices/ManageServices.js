import React from 'react';
import UseServices from '../../hooks/UseServices';

const ManageServices = () => {
    const [services, setServices] = UseServices();

    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure ?');
        if (proceed) {
            const url = `https://nameless-wildwood-86783.herokuapp.com/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                })
        }
    };
    return (
        <div className='w-50 mx-auto'>
            <h2>Manage Your Service</h2>
            {
                services.map(service => <div key={service._id}>
                    <h5>{service.name} <button onClick={() => handleDelete(service._id)}>X</button></h5>
                </div>)
            }
        </div>
    );
};

export default ManageServices;