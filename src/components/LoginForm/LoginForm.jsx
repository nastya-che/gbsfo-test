import React, {useState} from 'react';
import {Grid, Typography} from '@material-ui/core';
import {connect} from 'react-redux';
import {login, logout} from "../../redux/actions";
import {useStyles} from "./styles";
import {CustomColors} from '../StylesHelper';

const LoginFormImpl = props => {
   const classes = useStyles();
   const [userName, setUserName] = useState('');
   const [password, setPassword] = useState('');
   const fullFields = userName.length && password.length;

   const handleSubmit = () => { props.login(userName, password) };
   const logout = () => { props.logout() };

   return(
      <>
         {props.loggedIn ?
            <Grid container xs={12} className={classes.loggedInForm}>
               <Typography className={classes.text}>You are already logged in.</Typography>
               <Typography className={classes.text}>Wanna log out?</Typography>
               <button onClick={logout} className={classes.blueButton}>Log Out</button>
            </Grid> :
            <form className={classes.form}>
               <Typography className={classes.title}>Login form</Typography>
               <div className={classes.inputWrapper}>
                  <label className={classes.label} htmlFor="userName">User name</label>
                  <input className={classes.input} type={'text'} name={'user-name'} value={userName} onChange={(e) => setUserName(e.target.value)}/>
               </div>
               <div className={classes.inputWrapper}>
                  <label className={classes.label} htmlFor="password">Password</label>
                  <input className={classes.input} type={'text'} name={'password'} value={password} onChange={(e) => setPassword(e.target.value)}/>
               </div>
               <button type="button"
                       onClick={handleSubmit}
                       className={classes.blueButton}
                       style={{background: fullFields ? CustomColors.blueColor : CustomColors.grayColor}}>
                  Login
               </button>
            </form>
         }
      </>
   )
};

const mapStateToProps = state => {
   return{
      loggedIn: state.usersReducer.loggedIn
   }
};

const mapDispatchToProps = dispatch => {
   return{
      login: (userName, password) => dispatch(login(userName, password)),
      logout: () => dispatch(logout())
   }
};

export const LoginForm = connect(mapStateToProps, mapDispatchToProps)(LoginFormImpl);