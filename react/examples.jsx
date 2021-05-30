
import * as React from 'react';
import './Checkbox.scss';

const Checkbox = ({ onToggle, isChecked }) => (
  <div className='checkbox'>
    <label className='checkbox__label'>
      <input 
        className='checkbox__input'
        type='checkbox' 
        checked={isChecked} 
        onChange={onToggle}
      />
      <span className='checkbox__checkmark' />
    </label>
  </div>
)

export default Checkbox;