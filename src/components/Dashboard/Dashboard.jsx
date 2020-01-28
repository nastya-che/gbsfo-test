import React, {useState} from 'react';
import {Grid, Typography} from '@material-ui/core';
import {connect} from 'react-redux';
import {addItem} from '../../redux/actions';
import {ListItem} from "../ListItem/ListItem";
import {useStyles} from "./styles";

const DashboardImpl = props => {
   const [nameValue, setNameValue] = useState('');
   const [passValue, setPassValue] = useState('');
   const classes = useStyles();
   const {items} = props;

   const ID = () => { return '_' + Math.random().toString(36).substr(2, 9)};

   const handleClick = () => {
      props.addItem(ID(), nameValue, passValue);
      setNameValue('');
      setPassValue('');
   };

   return(
      <>
         {props.loggedIn ?
            <Grid container xs={12}>
               <Grid container item xs={12}>
                  {
                     items.length ? items.map((item) => {
                        return (
                           <ListItem
                              id={item.id}
                              passName={item.passName}
                              passValue={item.passValue}
                           />
                        )
                     }) : null
                  }
                  <Grid container item xs={3} className={classes.cardWrapper}>
                     <input className={classes.input}
                            type={'text'}
                            value={nameValue}
                            onChange={(e) => setNameValue(e.target.value)} name={'passName'} />
                     <input className={classes.input}
                            type={'password'}
                            value={passValue}
                            onChange={(e) => setPassValue(e.target.value)} name={'passValue'}/>
                     <button onClick={handleClick} className={classes.grayButton}>Add new item</button>
                  </Grid>
               </Grid>
            </Grid> :
            <Grid container xs={12}>
               <Typography className={classes.text}>Ooops! You`re not logged in.</Typography>
            </Grid>
         }
      </>

   )
};

const mapStateToProps = state => {
   return{
      items: state.itemsReducer,
      loggedIn: state.usersReducer.loggedIn
   }
};

const mapDispatchToProps = dispatch => {
   return{
      addItem: (passId, passName, passValue) => dispatch(addItem(passId, passName, passValue)),
   }
};

export const Dashboard = connect(mapStateToProps, mapDispatchToProps)(DashboardImpl);