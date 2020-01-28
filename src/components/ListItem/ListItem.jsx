import React, {useState} from 'react';
import {Grid} from '@material-ui/core';
import {editItemName, editItemValue, removeItem} from "../../redux/actions";
import {connect} from 'react-redux';
import {useStyles} from './styles';

const ListItemImpl = props => {
   const classes = useStyles();
   const [isEditMode, setEditMode] = useState(false);
   const [passVisibility, setPassVisibility] = useState(false);
   const {id, passName, passValue} = props;

   const handleChangeName = (newValue) => {props.editItemName(id, newValue)};
   const handleChangeValue = (newValue) => {props.editItemValue(id, newValue)};
   const handleRemove = () => {props.removeItem(id)};
   const handleEdit = () => {setEditMode(!isEditMode); setPassVisibility(false)};
   const handleClickInput = () => {setPassVisibility(!passVisibility)};

   return(
      <Grid container item xs={3} className={classes.cardWrapper} style={{borderColor: isEditMode ? '#3f51b5' : 'rgba(155,155,155,0.7)'}}>
         <input disabled={!isEditMode}
                className={classes.input}
                name={passName}
                value={passName}
                onChange={e => handleChangeName(e.target.value)}
                type={'text'}/>
         <input disabled={!isEditMode}
                className={classes.input}
                name={passValue}
                value={passValue}
                onChange={e => handleChangeValue(e.target.value)}
                onClick={handleClickInput}
                type={passVisibility ? 'text' : 'password'}/>
         <div className={classes.btnsWrapper}>
            <button onClick={handleEdit} className={isEditMode ? classes.blueButton : classes.grayButton}>{isEditMode ? 'Done' : 'Edit'}</button>
            <button onClick={handleRemove} className={classes.grayButton}>remove</button>
         </div>
      </Grid>
   )
};

const mapStateToProps = state => {
   return{
      items: state.itemsReducer
   }
};

const mapDispatchToProps = dispatch => {
   return{
      editItemName: (id, newValue) => dispatch(editItemName(id, newValue)),
      editItemValue: (id, newValue) => dispatch(editItemValue(id, newValue)),
      removeItem: (id) => dispatch(removeItem(id))
   }
};

export const ListItem = connect(mapStateToProps, mapDispatchToProps)(ListItemImpl);