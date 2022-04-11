import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {
  return (
    <div className="App">
      <SayMyName nome="Sarah"/>
      <Pessoa nome="Sarah" idade="22" profissao="desenvolvedora" foto="https://via.placeholder.com/150" />
      <Frase/>
      <Frase/>
    </div>
  );
}

export default App;
