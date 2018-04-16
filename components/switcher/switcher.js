import PropTypes from 'prop-types';
import s from './switcher.scss';

const Switcher = (props) => {
  const { list, selected, onSelect } = props;
  return (
    <div className="switcher">
      <ul>
        {list.map((item, i) => (
          <li key={item}>
            <button onClick={() => onSelect(i)} className={selected === i ? 'selected' : ''}>
              {item}
            </button>
          </li>
        ))}
      </ul>
      <style jsx global>{s}</style>
    </div>
  );
};

Switcher.propTypes = {
  list: PropTypes.array,
  selected: PropTypes.number,
  onSelect: PropTypes.func.isRequired,
};

Switcher.defaultProps = {
  list: [],
  selected: 0,
};

export default Switcher;
