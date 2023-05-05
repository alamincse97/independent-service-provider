import React, { useEffect, useState } from 'react';
import Service from '../Home/Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className='my-4 container'>
            <h2 className='services-title'>Our Services</h2>
            <div className='services-container'>
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                >

                </Service>)
            }
            </div>
        </div>
    );
};

export default Services;