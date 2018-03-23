import Link from 'next/link';
import s from './infobox.scss';

const InfoBox = () => (
  <div className="infoBox">
    <Link href="#info">
      <img src="../static/images/info.png" alt="info" />
    </Link>
    <style jsx>{s}</style>
  </div>
);

export default InfoBox;
