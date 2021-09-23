import {Table,TableBody, TableCell, TableHead, TableRow,makeStyles,Button} from '@material-ui/core';
import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import { useEffect,useState } from 'react';
import { getUser } from '../service/api'


const useStyle=makeStyles({
    table:{
        marginTop:'5px'
    },
    thead:{
        '& > *':{
            background:'#1769aa',
            color:'white'
        }
    },
    
})

const Home=()=>{
    const classes=useStyle(); 

    const [users,setUsers]=useState([]);
    useEffect(()=>{  
        getAllUser();
    },[]);
    const getAllUser= async ()=>{
        let response= await getUser();
        console.log(response.data);
        console.log(response.data[0].name);
        setUsers(response.data);
    }

    const loadData=(user)=>{
   console.log(user);
   let {id,email,name,phone,username,website}= user;
   localStorage.setItem('id',id);
   localStorage.setItem('Email',email);
   localStorage.setItem('Name',name);
   localStorage.setItem('Mobile',phone);
   localStorage.setItem('UserName',username);
   localStorage.setItem('Website',website);
    }

   const deleteUser=(user)=>{
      fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
                method: 'DELETE',
                })
                .then((response) => response.json())
                .then((json) => console.log(json));
            
    }

    return(
        <> 
        <NavLink to='/add' className={classes.Addrec}>
        <Button style={{color:'blue',fontSize:'19px'}}> + Add record</Button>
        </NavLink>
         <Table className={classes.table}>
         <TableHead>
                <TableRow className={classes.thead}>
                <TableCell>Name</TableCell>
                <TableCell>UserName</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Mobile</TableCell>
                <TableCell>Website</TableCell>
                <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map ((user) => (
                        <TableRow key={user.id}>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell> 
                            <TableCell>{user.website}</TableCell> 
                            <TableCell>
                                <Button variant='contained' onClick={()=>loadData(user)} component={Link} to={`/edit/${user.email}`} style={{marginRight:'5px',borderRadius:'10px', width:'31px',height:'25px'}} color='primary'>Edit</Button>
                                <Button variant='contained' onClick={()=>deleteUser(user)}  style={{borderRadius:'10px', width:'31px',height:'25px'}} color='secondary'>Delete</Button>
                            </TableCell> 
                            
                            
                        </TableRow>
                    
                    ))}
                
            </TableBody> 
            
        </Table> 
        </>
    );
}
export default Home;