import { useState} from 'react';

function Form(){

    function cadastrarUsuario(e){
        e.preventDefault();
        console.log(`Usuário: ${name}\nSenha: ${password}`);
    }

    // O que vou ler (name) e o que vou alterar (setName)
    const [name, setName] = useState("Sarah");
    const [password, setPassword] = useState("Sarah");
    
    return(
        <div>
            <h2>Meu cadastro:</h2>
            <form onSubmit={cadastrarUsuario}>
                <label htmlFor="name">Nome</label>
                <div>
                    <input type="text" id="name" name="name" value={name} placeholder="Digite o seu nome" onChange={(e) => setName(e.target.value)} />
                </div>
                <label htmlFor="password">Senha</label>
                <div>
                    <input type="password" id="password" name="password" placeholder="Digite sua senha"  onChange={(e) => setPassword(e.target.value)} />
                </div>
                <br/>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    );
}

export default Form;