import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  return (
    <div className="App">
      <SayMyName nome="Sarah"/>
      <Pessoa nome="Sarah" idade="22" profissao="desenvolvedora" foto="https://via.placeholder.com/150" />
    </div>
  );
}

export default App;
