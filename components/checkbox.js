import uuidv4 from 'uuid/v4'
const Checkbox = (props) => {
  const id = uuidv4();
  return (
    <div>
      <input type="checkbox" id={id} checked={props.checked} onClick={props.clickHandler}/>
      <label htmlFor={id}>{props.label}</label>
      <style jsx>{`
        /* Base for label styling */
        [type="checkbox"] {
          display: none;
        }
        [type="checkbox"]:not(:checked),
        [type="checkbox"]:checked {
            position: absolute;
            left: -9999px;
        }
        [type="checkbox"]:not(:checked) + label,
        [type="checkbox"]:checked + label {
            position: relative;
            padding-left: 32px;
            cursor: pointer;
            margin-bottom: 4px;
            display: inline-block;
            font-size: 16px;
        }
        /* checkbox aspect */
        [type="checkbox"]:not(:checked) + label:before,
        [type="checkbox"]:checked + label:before {
            content: '';
            position: absolute;
            left: 0px; top: 0px;
            width: 24px; height: 24px;
            border: 2px solid #cccccc;
            background: #ffffff;
            border-radius: 4px;
            box-shadow: inset 0 1px 3px rgba(0,0,0,.1);
        }
        /* checked mark aspect */
        [type="checkbox"]:not(:checked) + label:after,
        [type="checkbox"]:checked + label:after {
            content: '✔';
            position: absolute;
            top: 0px; left: 6px;
            font-size: 20px;
            line-height: 1.2;
            color: #09ad7e;
            transition: all .2s;
        }
        /* checked mark aspect changes */
        [type="checkbox"]:not(:checked) + label:after {
            opacity: 0;
            transform: scale(0);
        }
        [type="checkbox"]:checked + label:after {
            opacity: 1;
            transform: scale(1);
        }
        /* disabled checkbox */
        [type="checkbox"]:disabled:not(:checked) + label:before,
        [type="checkbox"]:disabled:checked + label:before {
            box-shadow: none;
            border-color: #999999;
            background-color: #dddddd;
        }
        [type="checkbox"]:disabled:checked + label:after {
            color: #999999;
        }
        [type="checkbox"]:disabled + label {
            color: #aaaaaa;
        }
        /* accessibility */
        [type="checkbox"]:checked:focus + label:before,
        [type="checkbox"]:not(:checked):focus + label:before {
            border: 2px dotted #0000ff;
        }
        /* hover style just for information */
        label:hover:before {
            border: 2px solid #4778d9!important;
            background: #ffffff
          }
      `}
      </style>
    </div>
  )
}
export default Checkbox
