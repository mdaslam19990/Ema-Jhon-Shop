import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';

const Invantory = () => {
    const invantory = useLoaderData()
    return (
        <div>
            <h2>This is invantory section {invantory.length}</h2>
        </div>
    );
};

export default Invantory;