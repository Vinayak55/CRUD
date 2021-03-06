import React, { useState,useEffect } from "react";
import {FormGroup,InputLabel,Input,FormControl,Button,makeStyles} from '@material-ui/core';
import {Link} from 'react-router-dom';


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


export default function Edit() {
const [id,setId]=useState('');
const [name,setName]=useState('');
const [username,setuserName]=useState('');
const [email,setEmail]=useState('');
const [phone,setPhone]=useState('');
const [website,setWebsite]=useState('');


useEffect(() => {
setId(localStorage.getItem('Id'));
setName(localStorage.getItem('Name'));
setuserName(localStorage.getItem('UserName'));
setEmail(localStorage.getItem('Email'));
setPhone(localStorage.getItem('Mobile'));
setWebsite(localStorage.getItem('Website'));
},[])

const editUserData=()=>{
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
  method: 'PUT',
  body: JSON.stringify({
    id:id,
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
                <InputLabel htmlFor="my-input">First Name</InputLabel>
                <Input id="my-input" value={name} onChange={(e)=>setName(e.target.value)} />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input" required={true}>User Name</InputLabel>
                <Input id="my-input" value={username} onChange={(e)=>setuserName(e.target.value)} />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input id="my-input" value={email} onChange={(e)=> setEmail(e.target.value)} />
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input  id="my-input" value={phone} onChange={(e)=>setPhone(e.target.value)} />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Website</InputLabel>
                <Input  id="my-input" value={website} onChange={(e)=>setWebsite(e.target.value)} />
            </FormControl>
            
        </FormGroup>     
        <span className={classes.btn}>
                <Button type='submit' variant="contained" onClick={editUserData} component={Link} to='/home' color="primary">Update</Button>
                <Button variant="contained" component={Link} to='/home' >Cancel</Button>
            </span>            
  </div>
  </div>
);
}