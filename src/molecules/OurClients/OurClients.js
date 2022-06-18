import React from 'react';
import ClientCard from '../../atoms/ClientCard/ClientCard';
import  './OurClients.scss'

const OurClients = props => {
return (
<div className='m-our-clients' data-test="">
    <ClientCard/>
</div>
);
};

export default OurClients;