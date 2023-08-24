import NewProject from '../project/ProjectForm'
import styles from './NewFuncionario.module.css'

function NewFuncionario() {
    return (
        <h1 className={styles.newfuncionario_container}>
            <h1>Registrar novo funcionário</h1>
            <p>Registre seu mais novo funcionário aqui!</p>
            <NewProject />
        </h1>
    )
}

export default NewFuncionario