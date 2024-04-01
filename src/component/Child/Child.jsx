import React from 'react';
import GrandChild from '../GrandChild/GrandChild';

const Child = ({property}) => {
    return (
        <div>
            <h1>Child</h1>
            <GrandChild property={property}></GrandChild>
        </div>
    );
};

export default Child;