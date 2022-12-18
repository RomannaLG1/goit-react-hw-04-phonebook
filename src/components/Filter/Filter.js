import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import { MdPersonSearch } from 'react-icons/md';
import { FilterForm, FilterInput, FilterLabel } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  const filterId = nanoid();
  return (
    <Formik>
      <FilterForm>
        <FilterLabel htmlFor={filterId}>
          <MdPersonSearch size="48" />
          <FilterInput
            id={filterId}
            type="text"
            value={value}
            onChange={onChange}
          />
        </FilterLabel>
      </FilterForm>
    </Formik>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
