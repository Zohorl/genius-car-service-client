import React from 'react';

import expert1 from '../../../images/Expert/expert-1.jpg';
import expert2 from '../../../images/Expert/expert-2.jpg';
import expert3 from '../../../images/Expert/expert-3.jpg';
import expert4 from '../../../images/Expert/expert-4.jpg';
import expert5 from '../../../images/Expert/expert-5.jpg';
import expert6 from '../../../images/Expert/expert-6.png';
import Expert from '../Expert/Expert';

const experts = [
    { id: 1, name: 'Mr Abul', img: expert1 },
    { id: 2, name: 'Mr Babul', img: expert2 },
    { id: 3, name: 'Mr Khawya Kader', img: expert3 },
    { id: 4, name: 'Mr Jhontu', img: expert4 },
    { id: 5, name: 'Mr Montu', img: expert5 },
    { id: 6, name: 'Mrs Chokhina', img: expert6 }
];
const Experts = () => {
    return (
        <div id='experts' className='container'>
            <h3 className='text-center text-success mt-5'>Our Experts</h3>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;