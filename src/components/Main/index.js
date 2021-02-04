import React from  'react';

import './style.css';

import Grid from '../Grid/index';

import List from '../List/index';

import Serch from '../Serch/index';

function Main({name,course, periodo, matricula, nivel}){
    return(
        <div className="main">
            <h3>Visualização de Inscrição em Disciplinas</h3>
            <div className="main-header">
                <div>
                    <h4>{name} / {matricula}</h4>
                    <h4>{course}</h4>
                </div>
                <div>
                    <h4>{periodo}</h4>
                    <h4>{nivel}</h4>
                </div>
                
            </div>
            <div className="main-conteiner">
                <Grid 
                times1 = " "
                timet1 = " "
                timeqa1 =" "
                timeqi1 = " "
                timesx1 =" "
                times2 = " "
                timet2 = " "
                timeqa2 = " "
                timeqi2 = " "
                timesx2 = " "
                times3 = " "
                timet3 = " "
                timeqa3 = " "
                timeqi3 = " "
                timesx3 = " "
                times4 = " "
                timet4 = " "
                timeqa4 = " "
                timeqi4 = " "
                timesx4 = " "
                times5 = " "
                timet5 = " "
                timeqa5 = " "
                timeqi5 = " "
                timesx5 = " "
                />
                <div className="menu">
                    <div className="select">
                        <h3>Meu curso</h3>
                        <h3>Duplo Diploma</h3>
                        <h3>Indisponível</h3>
                        <h4>Busca</h4>
                    </div>
                    <div className="serch">
                        <div className="option">
                            <h4>Selecione as tags desejadas:</h4>
                            <h5>Tags +</h5>
                        </div>
                        <Serch 
                        tag1="Poli"
                        tag2="Obrigatória"
                        tag3="3° periodo"
                        />
                    </div>
                    <List class1="Calculo III" prof1="Ilir"
                    class2="Eletrônica I"
                    prof2= "Oscar"
                    class3="Fisica III"
                    prof3 = "Marcelo"
                    class4="Sistemas Lineares"
                    prof4="Carlos"
                    class5="Metodos Matemáticos"
                    prof5= "Alan"
                    />
                </div>
                
            </div>

        </div>
    )
}

export default Main;