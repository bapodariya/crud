import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './UserReducer';
import { useNavigate } from 'react-router';

const Create = () => {

const navigate=useNavigate()
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const users=useSelector((state)=>state.users)
    const dispatch=useDispatch()
const handleSubmit=(e)=>{
e.preventDefault()
dispatch(addUser({id:users[users.length - 1].id + 1 ,name,email}))
navigate("/")
}
  return (
<>

<h3>Add New user</h3>
<form onSubmit={handleSubmit}>
 <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" class="form-control" name="name" id="exampleInputEmail1"
    onChange={(e)=>setName(e.target.value)}
    aria-describedby="emailHelp" placeholder="EnterName"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control"
     onChange={(e)=>setEmail(e.target.value)}
    name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
 

</>
  )
}

export default Create