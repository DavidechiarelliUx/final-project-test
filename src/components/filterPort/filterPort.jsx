import React from 'react';
import styles from "./filterPort.module.scss"



const FilterPort = ({ ports, onPortSelected }) => (
    <select onChange={(e) => onPortSelected(e.target.value)}>
        {ports.map(port => (
            <option key={port} value={port}>{port}</option>
        ))}
    </select>
);

export default FilterPort;
