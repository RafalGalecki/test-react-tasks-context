import { Task } from 'components/Task/Task';
import css from './TaskList.module.css';
import { useFilter } from 'contexts/filterContext';
import { useTask } from 'contexts/taskContext';

export const TaskList = () => {
  const { tasks } = useTask();

  const { status, statusFilters } = useFilter();
  const getVisibleTasks = (tasks, statusFilter) => {
    switch (statusFilter) {
      case statusFilters.active:
        return tasks.filter(task => !task.completed);
      case statusFilters.completed:
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  };

  const visibleTasks = getVisibleTasks(tasks, status);

  return (
    <ul className={css.list}>
      {visibleTasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
