import { Button } from 'components/Button/Button';
import css from './StatusFilter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/actions';
import { statusFilters } from '../../redux/constants';

export const StatusFilter = () => {
  // Otrzymujemy odnośnik do funkcji wysyłania akcji
  const dispatch = useDispatch();

  const filter = useSelector(state => state.filters.status);

  // Wywołujemy generator akcji i przekazujemy wartość filtra
  // Wysyłamy wynik – akcja zmiany filtra
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
