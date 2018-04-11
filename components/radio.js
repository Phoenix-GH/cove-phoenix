import uuidv4 from 'uuid/v4';
import PropTypes from 'prop-types';
import s from './radio.scss';

const Radio = (props) => {
  const id = uuidv4();
  const {
    name,
    label,
    clickHandler,
    disabled,
    checked,
  } = props;
  return (
    <div className="control-group">
      <label className="control control-radio" htmlFor={id}>
        {props.label}
        <input
          key={id}
          type="radio"
          name={name}
          id={id}
          checked={checked}
          onChange={clickHandler}
          disabled={disabled || false}
        />
        <div className="control_indicator" />
      </label>
      <style jsx global>{s}</style>
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
