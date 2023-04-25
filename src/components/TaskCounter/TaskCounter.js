import { useTask } from 'contexts/taskContext';
import css from './TaskCounter.module.css';

export const TaskCounter = () => {
  const { tasksActive, tasksCompleted } = useTask();

  return (
    <div>
      <p className={css.text}>Active: {tasksActive.length}</p>
      <p className={css.text}>Completed: {tasksCompleted.length}</p>
    </div>
  );
};
