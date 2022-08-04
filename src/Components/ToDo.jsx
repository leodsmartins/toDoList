import styles from "./ToDo.module.scss";
import rocketLogo from "../assets/rocket-logo.svg";
import { useState } from "react";

import { PlusCircle } from "phosphor-react";

import { Task } from "./Task";

export function ToDo() {
  const [tasks, setTasks] = useState(["Crie aqui suas tarefas"]);
  const [newTask, setNewTask] = useState("");

  function handleCreateNewTask() {
    event.preventDefault();
    setTasks([...tasks, newTask]);

    setNewTask('');
  }

  function handleNewTaskChange() {
    setNewTask(event.target.value);
  }

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
              <span>5</span>
            </div>
            <div className={styles.main__completedTasks}>
              <strong>Concluídas</strong>
              <span>2 de 5</span>
            </div>
          </div>
          <div className={styles.main__tasks}>
            {tasks.map((task) => {
              return <Task key={task} content={task} />;
            })}
          </div>
        </section>
      </main>
    </>
  );
}
