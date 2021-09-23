import React, { useState } from "react";
import {FormGroup,InputLabel,Input,FormControl,Button,makeStyles} from '@material-ui/core';
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

// const data = JSON.stringify({
//   "name":name,
//   "email":email,
//   "username":username,
//   "phone":parseInt(phone),
//   "website":website
// })
const editData=()=>{
  fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'POST',
  body: JSON.stringify({
    name: name,
    username: username,
    phone: phone,
    email:email,
    website:website
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
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