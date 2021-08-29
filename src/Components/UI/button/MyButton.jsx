import React from 'react';
import cl from './MyButton.module.css'
import Button from '@material-ui/core/Button';


const MyButton = ({children, ...props}) => {
  return (
      <button {...props} className={cl.myBtn}>
          {children}
      </button>
  )
}

export default MyButton;