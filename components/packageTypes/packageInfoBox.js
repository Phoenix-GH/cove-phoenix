import PropTypes from 'prop-types';
import InfoBoxButton from './infoBoxButton';
import PackageFeatures from './packageFeatures';
import stylesheet from '../../styles/components/packageTypes/packageInfoBox.scss';

const PackageInfoBox = (props) => {
  const {
    href,
    title,
    onClick,
    buttonLabel,
    children,
    price,
  } = props;

  const buttonProps = {
    href,
    onClick,
    label: buttonLabel,
    block: !price,
  };

  return (
    <div className={`package-info-box ${price ? 'with-price' : 'without-price'}`}>
      <h2>{title}</h2>
      <p>{children}</p>
      <PackageFeatures />
      <div className="box-footer">
        {price && <span className="price">${price}</span>}
        <InfoBoxButton {...buttonProps} />
      </div>
      <style jsx>{stylesheet}</style>
    </div>
  );
};

PackageInfoBox.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  price: PropTypes.number,
  children: PropTypes.any.isRequired,
};

PackageInfoBox.defaultProps = {
  href: null,
  onClick: () => {},
  price: null,
};

export default PackageInfoBox;
