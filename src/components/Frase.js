import styles from "./Frase.module.css";
// Criando o componente
function Frase(){

    return(
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Componente com uma frase</p>
        </div>
    )

}

export default Frase;