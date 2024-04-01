import React from 'react';
import Child from '../Child/Child';
import './Parent.css'

const Parent = ({property}) => {
    return (
        <div>
            <h1>Parent</h1>
            <Child property={property}></Child>
        </div>
    );
};

export default Parent;