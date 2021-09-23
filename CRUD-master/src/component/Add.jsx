import React, { useState } from "react";
import {FormGroup,InputLabel,Input,FormControl,Button,makeStyles} from '@material-ui/core';
import axios from 'axios';
import {Link} from 'react-router-dom'


const useStyles = makeStyles({
  container: {
      width: '50%',
      margin: '1% 0 0 25%',
      '& > *': {
          marginTop: 15
      }
  },
  btn:{
    '& > *':{
      marginLeft:'555px',
      width:'15%',
      marginTop:'15px'
    }
  }
})


export default function Add() {
const [name,setName]=useState('');
const [username,setuserName]=useState('');
const [email,setEmail]=useState('');
const [phone,setPhone]=useState('');
const [website,setWebsite]=useState('');

const data = JSON.stringify({
  "name":name,
  "email":email,
  "username":username,
  "phone":parseInt(phone),
  "website":website
})
const editData=()=>{
   axios.post(`https://jsonplaceholder.typicode.com/users`)
   console.log("Post Data :");
   console.log(data);
}

  const classes=useStyles();

 return(
  <div>
  <div>
  <FormGroup className={classes.container} >
    
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input id="my-input" onChange={(e)=>setName(e.target.value)} />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">User Name</InputLabel>
                <Input id="my-input" onChange={(e)=>setuserName(e.target.value)} />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input id="my-input" onChange={(e)=> setEmail(e.target.value)} />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input  id="my-input" onChange={(e)=>setPhone(e.target.value)} />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Website</InputLabel>
                <Input  id="my-input" onChange={(e)=>setWebsite(e.target.value)} />
            </FormControl>
            
        </FormGroup>     
        <span className={classes.btn}>
                <Button type='submit' variant="contained" onClick={editData} component={Link} to='/' color="primary">Add</Button>
                <Button variant="contained" component={Link} to='/home'>Cancel</Button>
            </span>            
  </div>
  </div>
);
}