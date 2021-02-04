import React from 'react';

import './style.css';

export default function List({class1, prof1, class2, prof2,class3, prof3,class4, prof4,class5, prof5}){
    return(
        <div className="list">
            <ul>
                <li><div className="details">
                    {class1} - {prof1}
                    <>
                    <p>------------------------------------</p>
                    </>
                    <h3>link para ementa - link para perfil discente</h3>
                    <div className="prerequisitos">
                        <h4>Pré-requisitos: </h4>
                        <h5>OK Cálculo 1</h5>
                        <h5>X  Cáculo 2</h5>

                    </div>
                    </div></li>
                <li>{class2} - {prof2}</li>
                <li>{class3} - {prof3}</li>
                <li>{class4} - {prof4}</li>
                <li>{class5} - {prof5}</li>
            </ul>
        </div>
    )
}