import React from 'react';

import './style.css';

export default function Serch({tag1,tag2,tag3}){
    return(
        <>
        <div className="tags">
            <h5>{tag1}</h5>
            <h5>{tag2}</h5>
            <h5>{tag3}</h5>
        </div>
        <div className="src">
            <p>Escreva qual turma deseja ver</p>
        </div>
        </>
    )
}