import styles from './Task.module.scss';

import { Trash, Check } from 'phosphor-react';
import { useState } from 'react';


export function Task({ content, setCountCompletedTask, countCompletedTask, deleteTasks }) {

    const [check, setCheck] = useState(false);
    const [taskCompleted, setTaskCompleted] = useState(`${styles.task__check}`)
    const [contentCompleted, setContentCompleted] = useState(`${styles.task__content}`)



    function handleCheckTask() {
        setCheck(!check);

        if(!check) {
            setCountCompletedTask(countCompletedTask + 1)
            setTaskCompleted(`${styles.task__taskCompleted}`);
            setContentCompleted(`${styles.task__contentCompleted}`)
        } 
        else if(check) {
            setCountCompletedTask(countCompletedTask - 1)
            setTaskCompleted(`${styles.task__check}`);
            setContentCompleted(`${styles.task__content}`)
        }
    }

    function handleDeleteTasks() {
        deleteTasks(content);
        if (check) {
            setCountCompletedTask(countCompletedTask - 1)
        }
    }

    return (
        <>
            <div className={styles.task}>
                <div className={styles.task__check_content}>
                    <div  className={taskCompleted} onClick={handleCheckTask}>
                        {check && <Check size={12} weight="bold" />}
                    </div>
                    <p className={contentCompleted}>{content}</p>
                </div>
                <button className={styles.task__trash_button} onClick={handleDeleteTasks} title="Deletar tarefa">
                    <Trash  size={20} weight="bold" />
                </button>
            </div>
        </>
    )
}