import React from 'react';
import { node, object, string } from 'prop-types';

const AccountCard = (props) => {
  return (
    <div style={props.style} className={`${props.className} accountCard`}>
      {props.children}
      <style jsx>{`
        .accountCard {
          padding: 24px;
          box-shadow: 0px 3px 5px 2px rgba(#404040, 0.2);
          margin-bottom: 20px;
          border-radius: 16px;
          border: 1px solid #F0F4F7;
        }
      `}</style>
    </div>
  );
}

AccountCard.propTypes = {
  children: node,
  style: object,
  className: string,
};

AccountCard.defaultProps = {
  style: {},
  className: ''  
};

export default AccountCard;