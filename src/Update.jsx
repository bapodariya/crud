import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router'
import { updateUser } from './UserReducer';

const Update = () => {
    const {id}=useParams();
    const users=useSelector((state)=>state.users)
    const existinguser=users.filter(f => f.id == id)
    const {name,email}=existinguser[0]
    const [uname,setName]=useState(name)
    const [uemail,setEmail]=useState(email)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const handleSubmit=(event)=>{
      event.preventDefault()
dispatch(updateUser({
    id:id,
    name:uname,
    email:uemail,
}))
navigate('/')
    }
  return (
  <>
  <h3>Update user</h3>
<form onSubmit={handleSubmit} className="form2">
 <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" class="form-control" name="name" 
    value={uname}
    onChange={e => setName(e.target.value)}
    placeholder="EnterName"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control"
      onChange={e => setEmail(e.target.value)}
    value={uemail}
    name="email" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  
 
  <button type='submit'  class="btn btn-primary">update</button>
</form>
 
  </>
  )
}

export default Update