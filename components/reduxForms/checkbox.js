import uuidv4 from 'uuid/v4';
import PropTypes from 'prop-types';
import s from './checkbox.scss';

const Checkbox = (input) => {
  const id = uuidv4();
  console.log('asdf', input)
  return (
    <div className="checkBox">
      <input id={id} type="checkbox" {...input} />
      <label htmlFor={id}>{input.label}</label>
      <style jsx>{s}</style>
    </div>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  clickHandler: PropTypes.func,
};

Checkbox.defaultProps = {
  label: '',
  clickHandler: () => {
  },
};

export default Checkbox;
