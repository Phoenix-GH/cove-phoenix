import PropTypes from 'prop-types';
import s from './greenButton.scss';

const SelectableButton = (props) => {
  const { title, onClick } = props;
  return (
    <button className="selectableButton" onClick={onClick}>
      {title}
      <style jsx>{s}</style>
    </button>
  );
};

SelectableButton.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
};

SelectableButton.defaultProps = {
  title: '',
  onClick: () => {},
};

export default SelectableButton;
