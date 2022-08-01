import styles from './ToDo.module.scss';
import rocketLogo from '../assets/rocket-logo.svg';


export function ToDo() {
    return (
        <>
           <header className={styles.header}>
                <img className={styles.header__logo} src={rocketLogo} alt="Logtipo. Foguete decolando" />
                <strong className={styles.header__title}>to<span>do</span></strong>
           </header>
           <main className={styles.main}>
                <form className={styles.main__form}action="post">
                    <input 
                        className={styles.main__input} 
                        type="text" 
                        placeholder="Adicione uma nova tarefa"
                    />
                    <button className={styles.main__button}>Criar</button>
                </form>
                <section className={styles.main__tasks_container}>
                    <div className={styles.main__tasks_header}>
                        <div className={styles.main__createdTasks}>
                            <strong>Tarefas criadas</strong>
                            <span>5</span>
                        </div>
                        <div className={styles.main__completedTasks}>
                            <strong>Concluídas</strong>
                            <span>2 de 5</span>
                        </div>
                    </div>
                    <div className={styles.main__tasks}></div>
                </section>
           </main>
        </>
    )
}