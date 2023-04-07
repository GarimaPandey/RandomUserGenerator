import React, { useEffect, useState } from "react";
import axios from "axios";
import _, { initial } from "lodash";
import UserDetail from "./UserDetail";
import {  Link, BrowserRouter ,Switch, Route } from "react-router-dom";




const pageSize = 10;
const RandomUser = () => {
const [users,setUsers] = useState();
const [searchTerm, setsearchTerm] = useState("");
const [paginatedUsers, setpaginatedUsers] = useState();
const [currentPage, setcurrentPage ] = useState(1);


useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/user").then((res)=>{
        console.log(res.data);
        setUsers(res.data);
        setpaginatedUsers(_(res.data).slice(0).take(pageSize).value())
    });
    },[]);

   
 
    const setLocalStorage = (id,first_name,last_name,email,phone,birthdate) => {
        localStorage.setItem("id" , id);
        localStorage.setItem("first_name" , first_name);
        localStorage.setItem("last_name" , last_name);
        localStorage.setItem("email" , email);
        localStorage.setItem("phone" , phone);
        localStorage.setItem("birthdate" , birthdate);

    }


    const pageCount = users? Math.ceil(users.length/pageSize) :0;
    if(pageCount === 1) return null;
    const pages = _.range(1, pageCount+1)
    const pagination=(pageNo)=>{
       setcurrentPage(pageNo); 
       const startIndex = (pageNo - 1)* pageSize;
       const paginatedUser = _(users).slice(startIndex).take(pageSize).value();
       setpaginatedUsers(paginatedUser)
    }

      
    return <div>
          
        {!paginatedUsers ? ("No Data found"):(
            <div className="container">
           <div className="row"> 
           <div className="col-md-8">
            <input type="text"
            placeholder="Search.."
            className="form-control"
            style={{marginTop: 50, marginBottom:20, width:"40%" }}
            onChange={(e)=>{
                setsearchTerm(e.target.value);
            }}
            />
            </div>
        </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>View User</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {
                    paginatedUsers.filter(val=>{
                        if(searchTerm === ''){
                            return val;
                        }else if (
                            val.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            val.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ){
                                return val;
                            }

                        }
                    ).map((user, index) => (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>
                                    <Link to="/view">
                                        <button className="btn btn-primary" onClick={()=>setLocalStorage(user.id, user.first_name,user.last_name,user.email,user.phone,user.birthdate)}>View User</button>
                                    </Link>
                             </td> 
                        </tr>
                   ))
}
                </tbody>
          
            </table>
    
    </div>
        )}

        
        <nav className="d-flex justify-content-center">
        <div className="col-md-6"
            style={{ marginBottom:20}}>
           <p><h8><b>Recently Viewed : </b></h8><Link to="/view">
            <button className="btn btn-info" 
            onClick={()=>setLocalStorage(window.localStorage.getItem('id'),
            window.localStorage.getItem('first_name'),
            window.localStorage.getItem('last_name'),
            window.localStorage.getItem('email'),
            window.localStorage.getItem('phone'),
            window.localStorage.getItem('birthdate'))}>
               {window.localStorage.getItem('first_name')}
            </button>
            </Link></p> 
            </div>
            <ul className="pagination">
            {
                pages.map((page) =>(
                    <li className={
                        page === currentPage?"page-item active" : "page-item"
                    }
                    >
                        <p className="page-link"
                        onClick={()=>pagination(page)}>
                        {page}
                        </p>
                        
                    </li>
                ))
            }
            </ul>
        </nav>
        </div>;
}
 
export default RandomUser;