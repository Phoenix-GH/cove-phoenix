import { Fragment } from 'react';
import stylesheet from '../../styles/components/packageTypes/packageFeatures.scss';

const PackageFeatures = () => (
  <Fragment>
    <div className="green-one-liner">No contracts</div>
    <div className="green-one-liner">24/7 professional monitoring</div>
    <div className="green-one-liner">Includes Cove Protect Panel</div>
    <style jsx>{stylesheet}</style>
  </Fragment>
);

export default PackageFeatures;
