import uuidv4 from 'uuid/v4';
import PropTypes from 'prop-types';
import styles from './radio.scss';

const Radio = (props) => {
  const { input, label, checked, onClick, value, onChange, formValue } = props;
  console.log('radioprops',  input, label, checked, onClick, value)
  const id = uuidv4();
  return (
    <div className="control-group" onClick={() => {onClick(); input.onChange(formValue);}}>
      <label className="control control-radio" htmlFor={id}>
        {label}
        <input
          {...input}
          checked={checked}
          type="radio"
        />
        <div className="control_indicator" />
      </label>
      <style jsx global>{styles}</style>
    </div>
  );
};

Radio.propTypes = {
  name: PropTypes.string,
  label: PropTypes.array,
  clickHandler: PropTypes.func,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
};

Radio.defaultProps = {
  name: '',
  label: [],
  disabled: false,
  checked: false,
  clickHandler: () => {},
};

export default Radio;