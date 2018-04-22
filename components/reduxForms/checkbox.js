import uuidv4 from 'uuid/v4';
import PropTypes from 'prop-types';
import s from './checkbox.scss';

const Checkbox = ({ input, label, checked, onClick = () => {}, value, onChange, formValue }) => {
  const id = uuidv4();
  return (
    <div className="checkBox">
      <input id={id} type="checkbox" {...input} onClick={onClick} />
      <label htmlFor={id}>{label}</label>
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
