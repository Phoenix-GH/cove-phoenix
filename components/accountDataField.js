import s from './accountDataField.scss';

const accountDataField = ({label, content, edit}) => (
  <div className="dataField">
    { edit ?
    <a className="edit" onClick={edit}>
      <img src="/static/images/edit.svg"  height="24px" alt="edit" />
    </a>
    : ''}
    {label ?
    <label>{label}</label>
    :''}
    <div className="content">{content}</div>
    <style jsx>{s}</style>
  </div>
);

export default accountDataField;
