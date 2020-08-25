import React,{useState,useEffect} from 'react';
import axios from 'axios';

function UserList() {
    
       
    
    const [user,setUser]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log(res)
            setUser(res.data);
        })
        .catch(err =>{
            console.log(err)
        })
        
    },[])
    
    return (
        <div>
           <table style={{border:'5px' }}>
               <td >
                   <th  >name</th>
                   {user.map(userr => <tr key={userr.id}>{userr.name}</tr>)}
                </td>
                <td>
                <th>User name</th>
                {user.map(userr => <tr key={userr.id}>{userr.username}</tr>)}
                </td>
                <td>
               <th >Email</th>
               {user.map(userr => <tr key={userr.id}>{userr.email}</tr>)}
               </td>
              
           </table>
           
               
              
            
        </div>
    )
}

export default UserList
