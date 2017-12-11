import { Container, Row, Col } from 'reactstrap';
import Radio from '../components/radio';
import s from './coveClubFullsize.scss';


const CoveClubFullsize = () => (
  <Container>
    <Row>
      <Col className={s.header}>
        <h2>Cove members to Cove Pay</h2>
        <div className={s.titleSubText}>
          Save $5/mo on your monitoring and use CoveClub EasyPay to pay your
          <br />equipment off over time with 0% APR
        </div>
      </Col>
    </Row>
    <Row className="no-gutters">
      <Col md={3} />
      <Col md={4}>
        <div className={`${s.coveClubTableHeader}  row`}>
          <Col xs={12}>
            <h4>Cove Club - $99</h4>
          </Col>
          <Col xs={6}>
            <h5>$19.99</h5>
            <p>Basic</p>
          </Col>
          <Col xs={6}>
            <h5>$29.99</h5>
            <p>Premium</p>
          </Col>
        </div>
      </Col>
      <Col md={{ size: 4, offset: 1 }}>
        <div className={`${s.coveNonClubTableHeader}  row`}>
          <Col xs={12}>
            <h4>Cove Club - $99</h4>
          </Col>
          <Col xs={6}>
            <h5>$19.99</h5>
            <p>Basic</p>
          </Col>
          <Col xs={6}>
            <h5>$29.99</h5>
            <p>Premium</p>
          </Col>
        </div>
      </Col>
    </Row>
    <Row className="no-gutters">
      <Col className={s.colLeftFirst} md={3}>
        <div className={s.colLeftContent}>
          24/7 Monitoring
        </div>
      </Col>
      <Col className={`${s.colMid} ${s.firstCol} row`} md={4}>
        <Col className={s.compareContent} xs={6}>
          <img className="img-fluid" src="/static/images/check.svg" />
        </Col>
        <Col className={s.compareContent} xs={6}>
          <img className="img-fluid" src="/static/images/check.svg" />
        </Col>
      </Col>
      <Col className={`${s.colSpacer} ${s.firstCol}`} md={1} />
      <Col className={`${`${s.colRight} row`} ${s.firstCol}`} md={4}>
        <Col className={s.compareContent} xs={6}>
          <img className="img-fluid" src="/static/images/check.svg" />
        </Col>
        <Col className={s.compareContent} xs={6}>
          <img className="img-fluid" src="/static/images/check.svg" />
        </Col>
      </Col>
    </Row>
    <Row className="no-gutters">
      <Col className={s.colLeft} md={3}>
        <div className={s.colLeftContent}>
          App Support
        </div>
      </Col>
      <Col className={`${s.colMid} row`} md={4}>
        <Col className={s.compareContent} xs={6}>
          <img className="img-fluid" src="/static/images/x.svg" />
        </Col>
        <Col className={s.compareContent} xs={6}>
          <img className="img-fluid" src="/static/images/check.svg" />
        </Col>
      </Col>
      <Col className={s.colSpacer} md={1} />
      <Col className={`${s.colRight} row`} md={4}>
        <Col className={s.compareContent} xs={6}>
          <img className="img-fluid" src="/static/images/x.svg" />
        </Col>
        <Col className={s.compareContent} xs={6}>
          <img className="img-fluid" src="/static/images/check.svg" />
        </Col>
      </Col>
    </Row>
    <Row className="no-gutters">
      <Col className={s.colLeft} md={3}>
        <div className={s.colLeftContent}>
          Remote Control
        </div>
      </Col>
      <Col className={`${s.colMid} row`} md={4}>
        <Col className={s.compareContent} xs={6}>
          <img className="img-fluid" src="/static/images/x.svg" />
        </Col>
        <Col className={s.compareContent} xs={6}>
          <img className="img-fluid" src="/static/images/check.svg" />
        </Col>
      </Col>
      <Col className={s.colSpacer} md={1} />
      <Col className={`${s.colRight} row`} md={4}>
        <Col className={s.compareContent} xs={6}>
          <img className="img-fluid" src="/static/images/x.svg" />
        </Col>
        <Col className={s.compareContent} xs={6}>
          <img className="img-fluid" src="/static/images/check.svg" />
        </Col>
      </Col>
    </Row>
    <Row className="no-gutters">
      <Col className={s.colLeft} md={3}>
        <div className={s.colLeftContent}>
          $5/month Loyalty Credit
        </div>
      </Col>
      <Col className={`${s.colMid} row`} md={4}>
        <Col className={s.compareContent} xs={6}>
          <img className="img-fluid" src="/static/images/x.svg" />
        </Col>
        <Col className={s.compareContent} xs={6}>
          <img className="img-fluid" src="/static/images/check.svg" />
        </Col>
      </Col>
      <Col className={s.colSpacer} md={1} />
      <Col className={`${s.colRight} row`} md={4}>
        <Col className={s.compareContent} xs={6}>
          <img className="img-fluid" src="/static/images/x.svg" />
        </Col>
        <Col className={s.compareContent} xs={6}>
          <img className="img-fluid" src="/static/images/check.svg" />
        </Col>
      </Col>
    </Row>
    <Row className="no-gutters">
      <Col className={s.colLeft} md={3}>
        <div className={s.colLeftContent}>
          Warranty
        </div>
      </Col>
      <Col className={`${s.colMid} row`} md={4}>
        <Col className={s.compareContent} xs={6}>
          <div>3 years</div>
        </Col>
        <Col className={s.compareContent} xs={6}>
          <div className={s.highlight}>Lifetime</div>
        </Col>
      </Col>
      <Col className={s.colSpacer} md={1} />
      <Col className={`${s.colRight} row`} md={4}>
        <Col className={s.compareContent} xs={6}>
          <div>3 years</div>
        </Col>
        <Col className={s.compareContent} xs={6}>
          <div className={s.highlight}>
            Lifetime
          </div>
        </Col>
      </Col>
    </Row>
    <Row className="no-gutters">
      <Col className={s.colLeft} md={3}>
        <div className={s.colLeftContent}>
          Live Voice Assistance
        </div>
      </Col>
      <Col className={`${s.colMid} row`} md={4}>
        <Col className={s.compareContent} xs={6}>
          <img className="img-fluid" src="/static/images/x.svg" />
        </Col>
        <Col className={s.compareContent} xs={6}>
          <img className="img-fluid" src="/static/images/check.svg" />
        </Col>
      </Col>
      <Col className={s.colSpacer} md={1} />
      <Col className={`${s.colRight} row`} md={4}>
        <Col className={s.compareContent} xs={6}>
          <img className="img-fluid" src="/static/images/x.svg" />
        </Col>
        <Col className={s.compareContent} xs={6}>
          <img className="img-fluid" src="/static/images/check.svg" />
        </Col>
      </Col>
    </Row>
    <Row className="no-gutters">
      <Col className={`${s.colLeft} ${s.colLeftLast}`} md={3}>
        <div className={s.colLeftContent}>
          Camera
        </div>
      </Col>
      <Col className={`${s.colMid} row`} md={4}>
        <Col className={s.compareContent} xs={6}>
          <img className="img-fluid" src="/static/images/x.svg" />
        </Col>
        <Col className={s.compareContent} xs={6}>
          <img className="img-fluid" src="/static/images/check.svg" />
        </Col>
      </Col>
      <Col className={s.colSpacer} md={1} />
      <Col className={`${s.colRight} row`} md={4}>
        <Col className={s.compareContent} xs={6}>
          <img className="img-fluid" src="/static/images/x.svg" />
        </Col>
        <Col className={s.compareContent} xs={6}>
          <img className="img-fluid" src="/static/images/check.svg" />
        </Col>
      </Col>
    </Row>
    <Row className="no-gutters">

      <Col md={{ size: 4, offset: 3 }}>
        <div className={s.coveClubTableFooter}>
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
          <Row>
            <Col xs={12}>
              <div className={`${s.selectBtn} mx-auto`}>
                Select
              </div>
            </Col>
          </Row>
        </div>
      </Col>
      <Col md={1} />
      <Col md={4}>
        <div className={s.nonClubTableFooter}>
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
      </Col>
    </Row>
  </Container>
);

export default CoveClubFullsize;
