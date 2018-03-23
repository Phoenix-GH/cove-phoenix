import uuidv4 from 'uuid/v4';
import PropTypes from 'prop-types';
import s from './checkbox.scss';

const Checkbox = (props) => {
  const id = uuidv4();
  const { label, clickHandler } = props;
  return (
    <div className="checkBox">
      <input type="checkbox" id={id} onClick={clickHandler} />
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
