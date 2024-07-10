import React, { useContext } from 'react';
import { LoginContext } from '../App';

export default function Hello({ name }) {
    const { hello } = useContext(LoginContext);
    return (
        <>
            <h1>Hello Component</h1>
            <div>
                <h2>{name}</h2>
                {hello}
            </div>
        </>
    )
}
