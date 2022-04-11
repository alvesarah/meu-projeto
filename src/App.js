import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <SayMyName nome="Sarah"/>
      <Pessoa nome="Sarah" idade="22" profissao="desenvolvedora" foto="https://via.placeholder.com/150" />
      <Frase/>
      <Frase/>
      <List/>
    </div>
  );
}

export default App;
