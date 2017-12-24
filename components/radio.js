import uuidv4 from 'uuid/v4'
const Radio = (props) => {
  const id = uuidv4();
  return (
    <div className="control-group">
      <label className="control control-radio" htmlFor={id}>
        {props.label}
        <input
          type="radio"
          name={id}
          id={id}
          checked={props.checked}
          onClick={props.clickHandler}
          defaultChecked={props.defaultChecked}
          disabled={props.disabled || false}
        />
        <div className="control_indicator"></div>
      </label>
      <style jsx global>{`
        .control {
          font-family: arial;
          display: block;
          position: relative;
          padding-left: 40px;
          margin-bottom: 5px;
          padding-top: 3px;
          cursor: pointer;
          font-size: 16px;
        }
        .control input {
          position: absolute;
          z-index: -1;
          opacity: 0;
        }
        .control_indicator {
          position: absolute;
          top: 2px;
          left: 0;
          height: 24px;
          width: 24px;
          background: #F0F2F5;
          border: 1px solid #DFE3E7;
        }
        .control-radio .control_indicator {
          border-radius: 50%;
        }

        .control:hover input ~ .control_indicator,
        .control input:focus ~ .control_indicator {
          background: #E5E8EB;
        }

        .control input:checked ~ .control_indicator {
          background: #F0F2F5;
        }
        .control:hover input:not([disabled]):checked ~ .control_indicator,
        .control input:checked:focus ~ .control_indicator {
          background: #E5E8EB;
        }
        .control input:disabled ~ .control_indicator {
          background: #e6e6e6;
          opacity: 0.6;
          pointer-events: none;
        }
        .control_indicator:after {
          box-sizing: unset;
          content: '';
          position: absolute;
          display: none;
        }
        .control input:checked ~ .control_indicator:after {
          display: block;
        }
        .control-radio .control_indicator:after {
          left: 5px;
          top: 5px;
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background: #00AD96;
        }
        .control-radio input:disabled ~ .control_indicator:after {
          background: #7b7b7b;
        }
      `}
      </style>
    </div>
  )
}

export default Radio
