import React from 'react';

import './style.css';

export default function Grid({times1,timet1,timeqa1,timeqi1,timesx1,times2,timet2,timeqa2,timeqi2,timesx2,times3,timet3,timeqa3,timeqi3,timesx3,times4,timet4,timeqa4,timeqi4,timesx4,times5,timet5,timeqa5,timeqi5,timesx5}){
    return(
        <div className="grid-conteiner">
            <div>SEG</div>
            <div>TER</div>
            <div>QUA</div>
            <div>QUI</div>
            <div>SEX</div>
            <div>{times1}</div>
            <div>{timet1}</div>
            <div>{timeqa1}</div>
            <div>{timeqi1}</div>
            <div>{timesx1}</div>

            <div>{times2}</div>
            <div>{timet2}</div>
            <div>{timeqa2}</div>
            <div>{timeqi2}</div>
            <div>{timesx2}</div>

            <div>{times3}</div>
            <div>{timet3}</div>
            <div>{timeqa3}</div>
            <div>{timeqi3}</div>
            <div>{timesx3}</div>

            <div>{times4}</div>
            <div>{timet4}</div>
            <div>{timeqa4}</div>
            <div>{timeqi4}</div>
            <div>{timesx4}</div>

            <div>{times5}</div>
            <div>{timet5}</div>
            <div>{timeqa5}</div>
            <div>{timeqi5}</div>
            <div>{timesx5}</div>
            
        </div>
    )
}