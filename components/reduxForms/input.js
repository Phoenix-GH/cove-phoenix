import PropTypes from 'prop-types';
import cx from 'classnames';
import InfoBox from '../infoBox/infobox';
import s from './input.scss';

const Input = ({
  input,
  label,
  type,
  hasInfo,
  meta: {
    active,
    touched,
    error,
    warning,
  },
}) => {
  const toggleClass = cx({
    active: input.value && input.value.length > 0,
    inactive: !input.value || input.value.length === 0,
  });
  const inputLabelClass = cx('inputLabel', toggleClass);
  const coveInputClass = cx('coveInput', {
    activeInput: active,
  });
  return (
    <div>
      <div className="inputBlockClass">
        <div
          className={coveInputClass}
        >
          <div className={inputLabelClass}>{label}</div>
          <input
            className={toggleClass}
            type={type}
            placeholder={label}
            {...input}
          />
        </div>
        {
          hasInfo && <InfoBox />
        }
      </div>
      <div className="errorMsg">
        {touched && !active && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
      <style jsx>{s}</style>
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  onChangeHandler: PropTypes.func,
  hasInfo: PropTypes.bool,
  meta: PropTypes.object,
  input: PropTypes.object,
};

Input.defaultProps = {
  type: 'text',
  label: '',
  hasInfo: false,
  meta: {},
  input: {},
  onChangeHandler: () => {
  },
};

export default Input;
