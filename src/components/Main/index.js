import React from  'react';

import './style.css';

import '../Grid/index';

import '../List/index';

function Main(name,course, periodo, matricula, nivel){
    return(
        <div className="main">
            <h3>Visualização de Inscrição em Disciplinas</h3>
            <div className="main-header">
                <div>
                    <h4>{name}</h4>
                    <h4>{course}</h4>
                </div>
                <h4>{periodo} / {matricula}</h4>
                <h4>{nivel}</h4>
            </div>
            <div className="main-conteiner">
                <Grid/>
                <List class1="Calculo" prof1="Ilir"/>
            </div>

        </div>
    )
}

export default Main;