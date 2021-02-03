import React from 'react';

import './style.css';

export default function List(class1, prof1){
    return(
        <div className="list">
            <ul>
                <li>{class1} - {prof1}</li>
            </ul>
        </div>
    )
}