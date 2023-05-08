import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users , setUser] = useState(loadedUsers)
    const handleDelete = (id)=>{
        fetch(`http://localhost:5000/user/${id}` ,{
            method : 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.deletedCount > 0){
                const remaining = users.filter(user => user._id !== id);
                setUser(remaining);
            }
        })
    }
    return (
        <div>
            {
                users.map(user => <p key={user._id} > {user.name} : {user.email} 
                <button onClick={()=>handleDelete(user._id)} >X</button>
                <Link to={`/update/${user._id}`} >Update</Link>
                 </p>
                )
            }
        </div>
    );
};

export default Users;