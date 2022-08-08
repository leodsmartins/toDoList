import styles from "./ToDo.module.scss";
import rocketLogo from "../assets/rocket-logo.svg";
import clipboard from "../assets/clipboard.svg";

import { useState } from "react";
import { PlusCircle } from "phosphor-react";
import { Task } from "./Task";

export function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [isThereTask, setIsThereTask] = useState();
  const [countCompletedTask, setCountCompletedTask] = useState(0)
 

  function handleCreateNewTask() {
    event.preventDefault();
    setTasks([...tasks, newTask]);

    setNewTask('');

    if(tasks === 0) {
      setIsThereTask(false);
    } else {
      setIsThereTask(true);
    }
  }

  function handleNewTaskChange() {
    setNewTask(event.target.value);
  }

  function deleteTasks(taskToDelete) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task !== taskToDelete;
    })
    setTasks(tasksWithoutDeletedOne);
  }

  const numberOfTasks = tasks.length;
  
  return (
    <>
      <header className={styles.header}>
        <img
          className={styles.header__logo}
          src={rocketLogo}
          alt="Logtipo. Foguete decolando"
        />
        <strong className={styles.header__title}>
          to<span>do</span>
        </strong>
      </header>
      <main className={styles.main}>
        <form className={styles.main__form} onSubmit={handleCreateNewTask}>
          <input
            className={styles.main__input}
            type="text"
            placeholder="Adicione uma nova tarefa"
            onChange={handleNewTaskChange}
            value={newTask}
          />
          <button className={styles.main__button} type="submit">
            Criar
            <PlusCircle size={24} weight="bold" />
          </button>
        </form>
        <section className={styles.main__tasks_container}>
          <div className={styles.main__tasks_header}>
            <div className={styles.main__createdTasks}>
              <strong>Tarefas criadas</strong>
              <span>{numberOfTasks}</span>
            </div>
            <div className={styles.main__completedTasks}>
              <strong>Concluídas</strong>
              <span>{countCompletedTask} de {numberOfTasks}</span>
            </div>
          </div>
            {isThereTask && (
              tasks.map((task) => {
                return (
                  <div className={styles.main__tasks} key={task}>
                    <Task 
                      content={task} 
                      countCompletedTask={countCompletedTask} 
                      setCountCompletedTask={setCountCompletedTask} 
                      deleteTasks={deleteTasks} />
                  </div>
                )
              })
            )}

            {!isThereTask && (
                <>
                  <div className={styles.main__tasks_empty}>
                    <img src={clipboard} />
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                  </div>
                </>
              )}
        </section>
      </main>
    </>
  );
}
