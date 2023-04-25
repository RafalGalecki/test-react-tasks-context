import { MdClose } from 'react-icons/md';
import css from './Task.module.css';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from 'redux/actions';

export const Task = ({ task }) => {
  // Otrzymujemy odnośnik do funkcji wysłania akcji
  const dispatch = useDispatch();

  // Wywołujemy generator akcji i przekazujemy identyfikator zadania
  // Wysyłamy wynik – akcję usunięcia zadania
  const handleDelete = () => dispatch(deleteTask(task.id));

  // Wywołujemy generator akcji i przekazujemy identyfikator zadania
  // Wysyłamy wynik – akcję przełączania statusu zadania
  const handleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        onChange={handleToggle}
        className={css.checkbox}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button type="button" onClick={handleDelete} className={css.btn}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
