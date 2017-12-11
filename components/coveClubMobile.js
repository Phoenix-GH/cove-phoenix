import { Row, Col, Collapse } from 'reactstrap';
import Radio from '../components/radio';
import s from './coveClubMobile.scss';

const CoveClubMobile = () => (
  <div className={s.mobileContainer}>
    <Row className={s.header}>
      <h2>Cove Members do CovePay</h2>
      <div className={s.headerSubText}>
        Save $5/mo on your monitoring and use CoveClub EasyPay
        to pay your equipment off over time with 0% APR
      </div>
    </Row>
    <div className={s.compareTable}>
      <Row>
        <Col className={s.colHeader} xs={6}>
          <h4 className={s.highlight} >
            Cove Club<br />$99
          </h4>
        </Col>
        <Col className={s.colHeader} xs={6}>
          <h4>Non-Club</h4>
        </Col>
      </Row>
      <Row className="no-gutters">
        <Col className={s.colLabel} xs={3}>
          <h5 className={s.highlight}>$19.99</h5>
          Basic
        </Col>
        <Col className={s.colLabel} xs={3}>
          <h5 className={s.highlight}>$29.99</h5>
          Premium
        </Col>
        <Col className={s.colLabel} xs={3}>
          <h5 className={s.alert}>$24.99</h5>
          Basic
        </Col>
        <Col className={s.colLabel} xs={3}>
          <h5 className={s.alert}>$34.99</h5>
          Premium
        </Col>
      </Row>
      <Row>
        <Col className={s.rowLabel} xs={12}>
          24/7 Monitoring
        </Col>
      </Row>
      <Row className={s.compareRow}>
        <Col xs={6}>
          <Row className="no-gutters">
            <Col className={s.cell} xs={6}>
              <img src="/static/images/check.svg" alt="check icon" />
            </Col>
            <Col className={s.cell} xs={6}>
              <img src="/static/images/check.svg" alt="check icon" />
            </Col>
          </Row>
        </Col>
        <Col xs={6}>
          <Row className={`${s.nonClubRow} no-gutters`}>
            <Col className={s.cell} xs={6}>
              <img src="/static/images/check.svg" alt="check icon" />
            </Col>
            <Col className={s.cell} xs={6}>
              <img src="/static/images/check.svg" alt="check icon" />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className={s.rowLabel} xs={12}>
          App Support
        </Col>
      </Row>
      <Row className={s.compareRow}>
        <Col xs={6}>
          <Row className="no-gutters">
            <Col className={s.cell} xs={6}>
              <img src="/static/images/x.svg" alt="x icon" />
            </Col>
            <Col className={s.cell} xs={6}>
              <img src="/static/images/check.svg" alt="check icon" />
            </Col>
          </Row>
        </Col>
        <Col xs={6}>
          <Row className={`${s.nonClubRow} no-gutters`}>
            <Col className={s.cell} xs={6}>
              <img src="/static/images/x.svg" alt="x icon" />
            </Col>
            <Col className={s.cell} xs={6}>
              <img src="/static/images/check.svg" alt="check icon" />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className={s.rowLabel} xs={12}>
          Remote Control
        </Col>
      </Row>
      <Row className={s.compareRow}>
        <Col xs={6}>
          <Row className="no-gutters">
            <Col className={s.cell} xs={6}>
              <img src="/static/images/x.svg" alt="x icon" />
            </Col>
            <Col className={s.cell} xs={6}>
              <img src="/static/images/check.svg" alt="check icon" />
            </Col>
          </Row>
        </Col>
        <Col xs={6}>
          <Row className={`${s.nonClubRow} no-gutters`}>
            <Col className={s.cell} xs={6}>
              <img src="/static/images/x.svg" alt="x icon" />
            </Col>
            <Col className={s.cell} xs={6}>
              <img src="/static/images/check.svg" alt="check icon" />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className={s.rowLabel} xs={12}>
          $5/month Loyalty Credit
        </Col>
      </Row>
      <Row className={s.compareRow}>
        <Col xs={6}>
          <Row className="no-gutters">
            <Col className={s.cell} xs={6}>
              <img src="/static/images/x.svg" alt="x icon" />
            </Col>
            <Col className={s.cell} xs={6}>
              <img src="/static/images/check.svg" alt="check icon" />
            </Col>
          </Row>
        </Col>
        <Col xs={6}>
          <Row className={`${s.nonClubRow} no-gutters`}>
            <Col className={s.cell} xs={6}>
              <img src="/static/images/x.svg" alt="x icon" />
            </Col>
            <Col className={s.cell} xs={6}>
              <img src="/static/images/check.svg" alt="check icon" />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className={s.rowLabel} xs={12}>
          Warranty
        </Col>
      </Row>
      <Row className={s.compareRow}>
        <Col xs={6}>
          <Row className="no-gutters">
            <Col className={s.cell} xs={6}>
              3 years
            </Col>
            <Col className={s.cell} xs={6}>
              <span className={s.highlight}>Lifetime</span>
            </Col>
          </Row>
        </Col>
        <Col xs={6}>
          <Row className={`${s.nonClubRow} no-gutters`}>
            <Col className={s.cell} xs={6}>
              3 years
            </Col>
            <Col className={s.cell} xs={6}>
              <span className={s.highlight}>Lifetime</span>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className={s.rowLabel} xs={12}>
          Live Voice Assistant
        </Col>
      </Row>
      <Row className={s.compareRow}>
        <Col xs={6}>
          <Row className="no-gutters">
            <Col className={s.cell} xs={6}>
              <img src="/static/images/x.svg" alt="x icon" />
            </Col>
            <Col className={s.cell} xs={6}>
              <img src="/static/images/check.svg" alt="check icon" />
            </Col>
          </Row>
        </Col>
        <Col xs={6}>
          <Row className={`${s.nonClubRow} no-gutters`}>
            <Col className={s.cell} xs={6}>
              <img src="/static/images/x.svg" alt="x icon" />
            </Col>
            <Col className={s.cell} xs={6}>
              <img src="/static/images/check.svg" alt="check icon" />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className={s.rowLabel} xs={12}>
          Camera
        </Col>
      </Row>
      <Row className={s.compareRow}>
        <Col xs={6}>
          <Row className="no-gutters">
            <Col className={s.cell} xs={6}>
              <img src="/static/images/x.svg" alt="x icon" />
            </Col>
            <Col className={s.cell} xs={6}>
              <img src="/static/images/check.svg" alt="check icon" />
            </Col>
          </Row>
        </Col>
        <Col xs={6}>
          <Row className={`${s.nonClubRow} no-gutters`}>
            <Col className={s.cell} xs={6}>
              <img src="/static/images/x.svg" alt="x icon" />
            </Col>
            <Col className={s.cell} xs={6}>
              <img src="/static/images/check.svg" alt="check icon" />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
    <div className={s.selectionBox}>
      <Row className="no-gutters">
        <Col xs={{ size: 2, offset: 1 }}>
          <div>
            <Radio
              clickHandler={() => {}}
              label={[<span className="bold" />]}
              checked={false}
            />
          </div>
        </Col>
        <Col className={s.optionLabel} xs={8}>
          Basic
        </Col>
      </Row>
      <Row className="no-gutters">
        <Col xs={{ size: 10, offset: 3 }}>
          <div className={s.highlight}>
            $19.99/mo
          </div>
        </Col>
      </Row>
    </div>
    <Collapse isOpen={true}>
      <Row>
        <Col className={s.financeOption} xs={{ size: 10, offset: 1 }}>
          <Radio
            clickHandler={() => {}}
            label={[<span>Pay equipment in full</span>]}
            checked={false}
          />
        </Col>
        <Col className={s.financeOption} xs={{ size: 10, offset: 1 }}>
          <Radio
            clickHandler={() => {}}
            label={[<span>Finance equipment at<br /> 0% APR for 60 months</span>]}
            checked={false}
          />
        </Col>
      </Row>
    </Collapse>
    <div className={s.selectionBox}>
      <Row className="no-gutters">
        <Col xs={{ size: 2, offset: 1 }}>
          <div>
            <Radio
              clickHandler={() => {}}
              label={[<span className="bold" />]}
              checked={false}
            />
          </div>
        </Col>
        <Col className={s.optionLabel} xs={8}>
          Premium
        </Col>
      </Row>
      <Row className="no-gutters">
        <Col xs={{ size: 10, offset: 3 }}>
          <div className={s.highlight}>
            $29.99/mo
          </div>
        </Col>
      </Row>
    </div>
    <Collapse isOpen>
      <Row>
        <Col className={s.financeOption} xs={{ size: 10, offset: 1 }}>
          <Radio
            clickHandler={() => {}}
            label={[<span>Pay equipment in full</span>]}
            checked={false}
          />
        </Col>
        <Col className={s.financeOption} xs={{ size: 10, offset: 1 }}>
          <Radio
            clickHandler={() => {}}
            label={[<span>Finance equipment at<br /> 0% APR for 60 months</span>]}
            checked={false}
          />
        </Col>
      </Row>
    </Collapse>
    <div className={s.selectionBox}>
      <Row className="no-gutters">
        <Col xs={{ size: 2, offset: 1 }}>
          <div>
            <Radio
              clickHandler={() => {}}
              label={[<span className="bold" />]}
              checked={false}
            />
          </div>
        </Col>
        <Col className={s.optionLabel} xs={8}>
          Basic
        </Col>
      </Row>
      <Row className="no-gutters">
        <Col xs={{ size: 10, offset: 3 }}>
          <div className={s.alert}>
            $19.99/mo
          </div>
        </Col>
      </Row>
    </div>
    <div className={s.selectionBox}>
      <Row className="no-gutters">
        <Col xs={{ size: 2, offset: 1 }}>
          <div>
            <Radio
              clickHandler={() => {}}
              label={[<span className="bold" />]}
              checked={false}
            />
          </div>
        </Col>
        <Col className={s.optionLabel} xs={8}>
          Premium
        </Col>
      </Row>
      <Row className="no-gutters">
        <Col xs={{ size: 10, offset: 3 }}>
          <div className={s.alert}>
            $29.99/mo
          </div>
        </Col>
      </Row>
    </div>
    <Row>
      <Col xs={12}>
        <div className={`${s.selectBtn} mx-auto`}>
          Select
        </div>
      </Col>
    </Row>

  </div>
);

export default CoveClubMobile;
