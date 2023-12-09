import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilters } from 'redux/useSelectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilters);

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={handleChange}
      placeholder="Find contacts by name"
    />
  );
};

export default Filter;
