import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <h1>Props</h1>
      <SayMyName nome="Sarah"/>
      <h1>Destructuring</h1>
      <Pessoa nome="Sarah" idade="22" profissao="desenvolvedora" foto="https://via.placeholder.com/150" />
      <h1>Estilização do CSS</h1>
      <Frase/>
      <Frase/>
      <h1>PropTypes e DefaultProps</h1>
      <List/>
      <h1>Eventos no React</h1>
      <Evento numero="1"/>
      <Evento numero="2"/>
      <h1>useState</h1>
      <Form/>
    </div>
  );
}

export default App;
