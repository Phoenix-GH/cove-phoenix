import PropTypes from 'prop-types';
import stylesheet from '../../styles/components/packageTypes/packageBackgroundImage.scss';

const PackageBackgroundImage = (props) => {
  const {
    className,
    imageFilename,
    ext,
    children,
  } = props;
  return (
    <div className={`package-info ${className}`}>
      {children}
      <div className="background-image">
        <img src={`/static/images/packageTypes/${imageFilename}.${ext}`} srcSet={`/static/images/packageTypes/${imageFilename}.${ext} 1440w, /static/images/packageTypes/${imageFilename}@2x.${ext} 2880w`} alt="" />
      </div>
      <style jsx>{stylesheet}</style>
    </div>
  );
};

PackageBackgroundImage.propTypes = {
  imageFilename: PropTypes.string.isRequired,
  className: PropTypes.string,
  ext: PropTypes.oneOf(['jpg', 'png']),
  children: PropTypes.any.isRequired,
};

PackageBackgroundImage.defaultProps = {
  className: '',
  ext: 'png',
};

export default PackageBackgroundImage;
