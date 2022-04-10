import './App.css';

function App() {
  const nome = "Sarah";
  
  const nomeMaiusculo = nome.toUpperCase();

  function soma(a,b){
    return a + b;
  }

  const url = "https://via.placeholder.com/150";

  return (
    <div className="App">
      <h1>Ola react!</h1>
      <p>Ola, {nomeMaiusculo}</p>
      <p>Soma {soma(3, 4)}</p>
      <img src={url} alt="Minha imagem"/>
    </div>
  );
}

export default App;
