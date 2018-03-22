import uuidv4 from 'uuid/v4';

import Link from 'next/link';
import s from './infobox.scss';

const InfoBox = () => {
  const id = uuidv4();
  return (
    <div className="infoBox">
      <Link href="#info" id={id}>
        <img src="static/images/info.png" alt="info" />
      </Link>
      <style jsx>{s}</style>
    </div>
  );
};

export default InfoBox;
