import PropTypes from 'prop-types';
import Link from 'next/link';
import stylesheet from '../../styles/components/packageTypes/infoBoxButton.scss';

const InfoBoxButton = (props) => {
  const {
    label,
    block,
    href,
    onClick,
  } = props;
  const buttonProps = { className: `info-box-button btn ${block ? 'btn-block' : ''}` };

  if (!href && onClick) {
    buttonProps.onClick = onClick;
  }

  const Button = <a {...buttonProps}>{label}<style jsx>{stylesheet}</style></a>;

  return (href ? <Link href={href}>{Button}</Link> : Button);
};

InfoBoxButton.propTypes = {
  href: PropTypes.string,
  label: PropTypes.string.isRequired,
  block: PropTypes.bool,
  onClick: PropTypes.func,
};

InfoBoxButton.defaultProps = {
  block: false,
  href: null,
  onClick: () => {},
};

export default InfoBoxButton;
