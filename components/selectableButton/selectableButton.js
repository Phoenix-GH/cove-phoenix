import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './selectableButton.scss';

const SelectableButton = (props) => {
  const { title, isSelected, onClick } = props;
  const buttonClass = cx('selectableButton', {
    selected: isSelected,
  });
  return (
    <button className={buttonClass} onClick={onClick}>
      {title}
      <style jsx>{s}</style>
    </button>
  );
};

SelectableButton.propTypes = {
  title: PropTypes.string,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
};

SelectableButton.defaultProps = {
  title: '',
  isSelected: false,
  onClick: () => {},
};

export default SelectableButton;
