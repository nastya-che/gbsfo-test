import {makeStyles} from "@material-ui/core";
import {CustomColors} from "../StylesHelper";

export const useStyles = makeStyles(() => ({
   cardWrapper: {
      width: '200px',
      height: '200px',
      background: '#fff',
      border: `1px solid ${CustomColors.grayColor}`,
      borderRadius: '10px',
      display: 'flex',
      flexDirection: 'column',
      padding: '30px 10px',
      margin: '20px'
   },
   input: {
      width: "60%",
      minWidth: '150px',
      margin: '0 auto',
      outline: 'none',
      marginBottom: '10px',
      borderRadius: '5px',
      height: '25px',
      border: `1px solid ${CustomColors.grayColor}`,
      padding: '0 15px',
   },
   grayButton: {
      width: '150px',
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
   },
   text: {
      color: 'rgba(0,0,0,0.8)',
      fontSize: '18px',
      margin: '0 auto',
   },
}));