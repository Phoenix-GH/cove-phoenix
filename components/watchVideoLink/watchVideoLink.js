import PropTypes from 'prop-types';
import s from './watchVideo.scss';

const WatchVideoLink = (props) => {
  const { link, title, size } = props;
  return (
    <a href={link} className={size}>
      <img src="/static/images/watchVideo.png" alt="" />
      <span className={props.font}>{title}</span>
      <style jsx>{s}</style>
    </a>
  );
};

WatchVideoLink.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
  size: PropTypes.string,
  font: PropTypes.string,
};

WatchVideoLink.defaultProps = {
  link: '#',
  title: 'Watch video',
  size: 'large',
  font: 'open-sans',
};

export default WatchVideoLink;
