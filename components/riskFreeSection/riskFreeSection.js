import { Row } from 'reactstrap';
import s from './riskFreeSection.scss';

const RiskFreeSection = () => (
  <Row>
    <div className="riskFreeSection">
      <img src="/static/images/riskFreeTrial.png" alt="" />
      <h2>100% satisfaction guaranteed</h2>
      <p>Try out Cove for 60 days free, and if you don&apos;t like it more than your children,
        you can send it back complete free of charge. We are that good.
      </p>
    </div>
    <style jsx>{s}</style>
  </Row>
);

export default RiskFreeSection;
