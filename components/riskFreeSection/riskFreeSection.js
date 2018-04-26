import { Row } from 'reactstrap';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './riskFreeSection.scss';

const RiskFreeSection = (props) => {
  const { isContentHidden } = props.isContentHidden;
  const hiddenClass = cx('riskFreeSection', {
    hiddenContent: isContentHidden,
  });
  return (
    <Row>
      <div className={hiddenClass}>
        <img src="/static/images/riskFreeTrial.png" alt="" />
        <h2>100% satisfaction guaranteed</h2>
        <p>Try out Cove for 60 days free, and if you don&apos;t like it more than your children,
          you can send it back complete free of charge. We are that good.
        </p>
      </div>
      <style jsx>{s}</style>
    </Row>
  );
};

RiskFreeSection.propTypes = {
  isContentHidden: PropTypes.bool,
};

RiskFreeSection.defaultProps = {
  isContentHidden: true,
};
export default RiskFreeSection;
