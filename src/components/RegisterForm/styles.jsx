import {makeStyles} from "@material-ui/core";
import {CustomColors} from "../StylesHelper";

export const useStyles = makeStyles(() => ({
   form: {
      width: '300px',
      height: 'auto',
      background: '#fff',
      border: `1px solid ${CustomColors.grayColor}`,
      borderRadius: '10px',
      padding: '30px',
      margin: '0 auto'
   },
   inputWrapper: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '20px'
   },
   label: {
      alignSelf: 'flex-start',
      fontSize: '13px',
      color: 'gray'
   },
   input: {
      outline: 'none',
      borderRadius: '5px',
      height: '25px',
      border: `1px solid ${CustomColors.grayColor}`,
      padding: '0 15px'
   },
   title: {
      color: CustomColors.blueColor,
      textTransform: 'uppercase',
      textAlign: 'center',
      fontWeight: '500',
      marginBottom: '10px',
      fontSize: '18px'
   },
   blueButton: {
      width: 'auto',
      height: '40px',
      color: '#fff',
      background: CustomColors.blueColor,
      textTransform: 'uppercase',
      border: 'none',
      borderRadius: '10px',
      margin: '0 auto',
      marginTop: '15px',
      '&:hover': {
         cursor: 'pointer'
      },
      outline: 'none',
      padding: '0 25px'
   }
}));