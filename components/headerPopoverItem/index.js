import PropTypes from 'prop-types';
import s from './headerPopoverItem.scss';

const HeaderPopoverItem = props => (
  <div className="headerPopoverItem">
    <div className="text">
      {props.text}
    </div>
    <img src="/static/images/arrowFullRightGreen.png" alt="" />
    <style jsx>{s}</style>
  </div>
);

HeaderPopoverItem.propTypes = {
  text: PropTypes.string.isRequired,
};
export default HeaderPopoverItem;
