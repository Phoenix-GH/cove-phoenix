import Link from 'next/link';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
import s from './footerColumn.scss';

const FooterColumn = (props) => {
  const { title, list } = props;
  return (
    <Col xs={12} sm={3}>
      <div className="footerColumn">
        <Row>
          <div className="leftbar" />
          <div>
            <h4>{title}</h4>
            <ul>
              {list.map(item => (
                <li key={item.name}>
                  <Link href={item.link}>
                    <a className="footerColumn__link" href={item.link}>{item.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Row>
        <style jsx>{s}</style>
      </div>
    </Col>
  );
};

FooterColumn.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array,
  width: PropTypes.number,
};

FooterColumn.defaultProps = {
  title: '',
  list: [],
  width: 273,
};

export default FooterColumn;
