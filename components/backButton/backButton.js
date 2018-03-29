import Link from 'next/link';
import PropTypes from 'prop-types';
import s from './backButton.scss';

const BackButton = (props) => {
  const { title, link } = props;
  return (
    <Link href={link}>
      <ul className="list-inline">
        <li className="list-inline-item align-top">
          <img src="/static/images/arrowFullLeft.png" alt="arrowFullLeft" />
        </li>
        <li className="list-inline-item title">
          {title}
        </li>
        <style jsx global>{s}</style>
      </ul>
    </Link>
  );
};

BackButton.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
};

BackButton.defaultProps = {
  title: 'Return to Shop',
  link: '#',
};

export default BackButton;
