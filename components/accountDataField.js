import s from './accountDataField.scss';

const accountDataField = ({label, content}) => (
  <div>
    <div className={s.label}>{label}</div>
    <div className={s.content}>
      <p>
        {content}
      </p>
    </div>
  </div>
);

export default accountDataField;
