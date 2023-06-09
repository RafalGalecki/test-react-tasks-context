import { Button } from 'components/Button/Button';
import css from './StatusFilter.module.css';
import { useFilter } from 'contexts/filterContext';

export const StatusFilter = () => {
  //context:
  const { status, setStatus, statusFilters } = useFilter();

  const filter = status;

  const handleFilterChange = filter => setStatus(filter);

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
