import './App.css';

import Header from './components/Header/index';

import Main from './components/Main/index';

function App() {
  return (
      <>
      <Header
      title="Documentos" 
      title1="Inscrição em Disciplinas" 
      title2="Grades" 
      title3="Dados Pessoais" 
      title4="Pesquisa Avaliativa" 
      title5="Requerimentos" 
      title6="Ajuda"
      />
        <div></div>
      <Main 
      name="Marina" 
      course="Engenharia" 
      periodo="1º" 
      matricula="Matrícula: xxxxxxxxx"
      nivel="Nivel: Graduação" 
      />
      </>
  );
}

export default App;
