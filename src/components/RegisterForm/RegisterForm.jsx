import React, {useState} from 'react';
import {Typography} from '@material-ui/core';
import {connect} from 'react-redux';
import {registerUser} from '../../redux/actions';
import {useStyles} from './styles';
import {CustomColors} from '../StylesHelper';

const RegisterFormImpl = props => {
   const classes = useStyles();
   const [userName, setUserName] = useState('');
   const [password, setPassword] = useState('');
   const fullFields = userName.length && password.length;

   const handleSubmit = () => {
     props.registerUser(userName, password);
     setUserName('');
     setPassword('');
   };

   return(
      <form className={classes.form}>
         <Typography className={classes.title}>Register form</Typography>
         <div className={classes.inputWrapper}>
            <label htmlFor="userName" className={classes.label}>User name</label>
            <input className={classes.input} type={'text'} name={'user-name'} value={userName} onChange={(e) => setUserName(e.target.value)}/>
         </div>
         <div className={classes.inputWrapper}>
            <label htmlFor="password" className={classes.label}>Password</label>
            <input className={classes.input} type={'text'} name={'password'} value={password} onChange={(e) => setPassword(e.target.value)}/>
         </div>
         <button type="button"
                 onClick={handleSubmit}
                 className={classes.blueButton}
                 style={{background: fullFields ? CustomColors.blueColor : CustomColors.grayColor}}>
            Submit
         </button>
      </form>
   )
};

const mapDispatchToProps = dispatch => {
   return{
      registerUser: (userName, password) => dispatch(registerUser(userName, password))
   }
};

export const RegisterForm = connect(null, mapDispatchToProps)(RegisterFormImpl);
