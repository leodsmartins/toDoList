import styles from './Task.module.scss';

import { Trash } from 'phosphor-react';


export function Task({ content }) {

    return (
        <>
            <div className={styles.task}>
                <div className={styles.task__check_content}>
                    <div className={styles.task__check}></div>
                    <p className={styles.task__content}>{content}</p>
                </div>
                <Trash className={styles.task__trash_icon} size={24} weight="bold" />
            </div>
        </>
    )
}