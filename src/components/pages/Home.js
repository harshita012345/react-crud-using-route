/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3001/users");
        setUser(result.data.reverse())
        console.log(result.data);
    }
    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:3001/users/${id}`);
        loadUsers();
    }
    return (
        <div className="container">
            <div className="py-4">
                {/* <h1>Home Page</h1> */}
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => {
                                return <tr key={i}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <a className="btn btn-primary" href={`/user/${user.id}`}>View</a>&nbsp;
                                        <a className="btn btn-outline-primary" href={`/user/edit/${user.id}`}>Edit</a>&nbsp;
                                        <a className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</a>&nbsp;
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Home;