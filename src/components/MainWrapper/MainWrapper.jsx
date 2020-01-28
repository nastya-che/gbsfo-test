import React from 'react';
import {Container, AppBar, Tab, Tabs, Typography, Box} from '@material-ui/core';
import {RegisterForm} from '../RegisterForm/RegisterForm';
import {LoginForm} from '../LoginForm/LoginForm';
import {Dashboard} from '../Dashboard/Dashboard';

const TabPanel = props => {
   const {index, value, children} = props;
  return(
     <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
     >
        {value === index && <Box p={3}>{children}</Box>}
     </Typography>
  )
};

export const MainWrapper = () => {
   const [value, setValue] = React.useState(2);
   const handleChange = (event, newValue) => {
      setValue(newValue);
   };
   return(
      <Container>
         <AppBar position="static">
            <Tabs value={value} onChange={handleChange}>
               <Tab label="Register" />
               <Tab label="Login" />
               <Tab label="Dashboard" />
            </Tabs>
         </AppBar>
         <TabPanel value={value} index={0}>
            <RegisterForm />
         </TabPanel>
         <TabPanel value={value} index={1}>
            <LoginForm />
         </TabPanel>
         <TabPanel value={value} index={2}>
            <Dashboard />
         </TabPanel>
      </Container>
   )
};





