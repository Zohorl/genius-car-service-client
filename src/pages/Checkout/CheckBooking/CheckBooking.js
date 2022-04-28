import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const CheckBooking = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);

    const [user] = useAuthState(auth);


    // const [user, setUser] = useState({
    //     name: 'Akbor',
    //     email: 'akbor@somrat.com',
    //     address: 'Tajmohol Road,Md.pur',
    //     phone: '017XXXXXXXXXX'
    // })

    // const handleAddressChange = event => {

    //     const { address, ...rest } = user;
    //     const newAddress = event.target.value;
    //     const newUser = { address: newAddress, ...rest };
    //     console.log(newUser);
    //     setUser(newUser);
    // }

    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            serviceId: serviceId,
            service: service.name,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('https://nameless-wildwood-86783.herokuapp.com/order', order)
            .then(response => {
                console.log(response);
                const { data } = response;
                if (data.insertedId) {
                    toast('Your order is booked !!!');
                    event.target.reset();
                }
            })
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Please Order : {service.name}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2 p-2' type="text" name='name' value={user?.displayName} placeholder='Name' required readOnly disabled />
                <br />
                <input className='w-100 mb-2 p-2' type="email" name='email' value={user?.email} placeholder='Email' required readOnly disabled />
                <br />
                <input className='w-100 mb-2 p-2' type="text" name='service' value={service.name} placeholder='Service' readOnly required />
                <br />
                <input className='w-100 mb-2 p-2' type="text" name='address' placeholder='Address' autoComplete='off' required />
                <br />
                <input className='w-100 mb-2 p-2' type="text" name='phone' placeholder='Phone' required />
                <br />
                <input className='btn btn-success' type="submit" value="Order Now" />

            </form>
        </div>
    );
};

export default CheckBooking;