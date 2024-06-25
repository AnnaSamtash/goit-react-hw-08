import { useDispatch, useSelector } from 'react-redux';
import { selectFilters } from '../../redux/filters/selectors.js';
import css from './SearchBox.module.css';
import { useId } from 'react';
import { setFilters } from '../../redux/filters/slice.js';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const nameId = useId();
  const numberId = useId();
  const handleFilterChange = newFilters => dispatch(setFilters(newFilters));

  return (
    <div className={css.container}>
      <h2 className={css.title}>Find contact</h2>
      <div className={css.searchBox_container}>
        <div className={css.input_container}>
          <label htmlFor={nameId} className={css.searchBox_title}>
            By name
          </label>
          <input
            className={css.searchBox_input}
            type="text"
            id={nameId}
            value={filters.name}
            onChange={e => handleFilterChange({ name: e.target.value })}
          />
        </div>
        <div className={css.form_input_container}>
          <label htmlFor={numberId} className={css.searchBox_title}>
            By number
          </label>
          <input
            className={css.searchBox_input}
            type="tel"
            id={numberId}
            value={filters.number}
            onChange={e => handleFilterChange({ number: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
}
