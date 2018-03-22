import uuidv4 from 'uuid/v4';
import PropTypes from 'prop-types';
import s from './checkbox.scss';

const Checkbox = (props) => {
  const id = uuidv4();
  const { checked, label, clickHandler } = props;
  return (
    <div className="checkBox">
      <input type="checkbox" id={id} checked={checked} onClick={clickHandler} />
      <label htmlFor={id}>{label}</label>
      <style jsx>{s}</style>
    </div>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string,
  clickHandler: PropTypes.func,
};

Checkbox.defaultProps = {
  checked: false,
  label: '',
  clickHandler: '',
};

export default Checkbox;
