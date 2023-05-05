import React from 'react';
import { useParams } from 'react-router-dom';
import './ServiceDetail.css';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div className='container services'>
            <h2 className='text-center'>Service Detail Page: {serviceId}</h2>
            <div className='text-center'>
                {/* <Link to="/checkout">
                    <button className='btn btn-primary'>Book Now</button>
                </Link> */}
            </div>
        </div>
    );
};

export default ServiceDetail;