import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { deleteUser } from "./UserReducer";

const Home=()=>{
    const dispatch=useDispatch()
const handleDelete=(id)=>{
dispatch(deleteUser({id:id}))
}
const users=useSelector((state)=>state.users)
console.log(users)
    return(
        <>
     
        <div className="">
        <button className="createbtn">
<Link to="/create" className="link1" style={{fontWeight:"500"}}>create +</Link>
</button>
        <table>
  <tr>
    <th>Id</th>
    <th>Name</th>
    <th>Email</th>
    <th>Action</th>
  </tr>
 <tbody>
            {
                users.map((user,index)=>{
                    return(
                        <>
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                  <button className="btn1"> <NavLink to={`/edit/${user.id}`} className="link">Edit</NavLink></button>  
                                <button className="btn2" onClick={()=>handleDelete(user.id)}>delete</button>
                            </td>
                        </tr>
                        </>
                    )
                })
            }       
 </tbody>
</table>

        </div>
        </>
    )
}
export default Home;