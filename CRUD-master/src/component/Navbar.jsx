import React from 'react';
import { AppBar,Toolbar,Typography,makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyle=makeStyles({
    header:{
        background: 'white',
        color:'black',
    },
    tab:{
        textDecoration:'none',
        position:'absolute',
        marginLeft:'1190px'
    }
})
const Navbar=()=>{
    const classes=useStyle();
    return(
        <>
        <AppBar position="static" className={classes.header}>
  <Toolbar>
    <Typography  variant="h6" style={{fontWeight:'bold',fontSize:'25px'}}>
      Task
    </Typography>
    <NavLink variant="h6" to="home" exact className={classes.tab}>
      Home
    </NavLink>
    
  </Toolbar>
</AppBar>
        </>
    );
}

export default Navbar;