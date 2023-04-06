import React, { useEffect, useState } from "react";
import axios from "axios";
import _, { initial } from "lodash";

const pageSize = 10;
const RandomUser = () => {
const [users,setUsers] = useState();
const [searchTerm, setsearchTerm] = useState("")
const [paginatedUsers, setpaginatedUsers] = useState();
const [currentPage, setcurrentPage ] = useState(1);


useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/user").then((res)=>{
        console.log(res.data);
        setUsers(res.data);
        setpaginatedUsers(_(res.data).slice(0).take(pageSize).value())
    });
    },[]);

    const pageCount = users? Math.ceil(users.length/pageSize) :0;
    if(pageCount === 1) return null;
    const pages = _.range(1, pageCount+1)
    const pagination=(pageNo)=>{
       setcurrentPage(pageNo); 
       const startIndex = (pageNo - 1)* pageSize;
       const paginatedUser = _(users).slice(startIndex).take(pageSize).value();
       setpaginatedUsers(paginatedUser)
    }
    return <div>{
        !paginatedUsers ? ("No Data found"):(
            <div className="container">
            <input type="text"
            placeholder="Search.."
            className="form-control"
            style={{marginTop: 50, marginBottom:20,width:"40%" }}
            onChange={(e)=>{
                setsearchTerm(e.target.value);
            }}
            />
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
                            {/* <td><a href>View User detail</a></td> */}
                        </tr>
                    ))
}
                </tbody>
            </table>
            </div>
        )}
        <nav className="d-flex justify-content-center">
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