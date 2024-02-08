import React from 'react';
import PropTypes from 'prop-types';
import styles from './task.module.css';

export default function Task({ task: { id, title, state }, onArchiveTask, onPinTask }) {
    const className = `${styles.list_item}
    ${state === 'TASK_INBOX' ? styles.TASK_INBOX :  state === 'TASK_PINNED' ? styles.TASK_PINNED :  styles.TASK_ARCHIVED }`;

    return (
    <div className={className}>
      <label
        htmlFor="checked"
        aria-label={`archiveTask-${id}`}
        className={styles.checkdox}
      >
        <input
          type="checkbox"
          disabled={true}
          name="checked"
          id={`archiveTask-${id}`}
          checked={state === "TASK_ARCHIVED"}
        />
        <span
          className={styles.checkdox_custom}
          onClick={() => onArchiveTask(id)}
        />
      </label>

      <label htmlFor="title" aria-label={title} className={styles.title}>
        <input
          type="text"
          value={title}
          readOnly={true}
          name="title"
          placeholder="Input title"
        />
      </label>

      {state !== "TASK_ARCHIVED" && (
        <button
          className={styles.pin}
          onClick={() => onPinTask(id)}
          id={`pinTask-${id}`}
          aria-label={`pinTask-${id}`}
          key={`pinTask-${id}`}
        >
          <span className={styles.icon_star} />
        </button>
      )}
    </div>
  );
}

 Task.propTypes = {
  /** Composition of the task */
  task: PropTypes.shape({
    /** Id of the task */
    id: PropTypes.string.isRequired,
    /** Title of the task */
    title: PropTypes.string.isRequired,
    /** Current state of the task */
    state: PropTypes.string.isRequired,
  }),
  /** Event to change the task to archived */
  onArchiveTask: PropTypes.func,
  /** Event to change the task to pinned */
  onPinTask: PropTypes.func,
 };