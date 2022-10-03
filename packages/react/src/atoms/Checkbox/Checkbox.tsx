import React, {useState} from 'react';
import '@ds.e/scss/lib/Checkbox.css'

export interface CheckboxProps {
    label?: string,
    checked?: boolean,
    id?: string
  }

  
  const Checkbox: React.FunctionComponent<CheckboxProps>= ({ label, checked=false, id }) => {
    const defaultChecked = checked ? checked : false;
    const [isChecked, setIsChecked] = useState(defaultChecked);
  
    return (
      <div className="checkbox-wrapper">
        <label>
          <input
           type="checkbox"
            id={id}
            checked={isChecked}
            className={isChecked ? "checked" : ""}
            onChange={() => setIsChecked((prev) => !prev)}
          />
         <span>{label}</span>
      </label>
      </div>
    );
  };
  export default Checkbox;