import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    return (
        <div className='text-center'>
            <h2>You are about to book :  {service.name}</h2>
            <p>${service.price}</p>
            <div className='text-center'>
                <Link to={`/checkbook/${serviceId}`}>
                    <button className='btn btn-success'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;