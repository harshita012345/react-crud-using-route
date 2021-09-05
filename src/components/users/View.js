/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const View = () => {
    const { id } = useParams();
    const [users, setUser] = useState({
        name: "",
        username: "",
        email: "",
    })

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const res = await axios.get(`http://localhost:3001/users/${id}`);
        setUser(res.data);
        console.log(res);
    }
    return (
        <div className="container py-4">
            <a href="/" className="btn btn-primary">Back to Home</a>
            <h1 className="display-4">User Id : {id}</h1>
            <hr />
            <ul className="list-group w-50">
                <li className="list-group-item">Name: {users.name}</li>
                <li className="list-group-item">UserName: {users.username}</li>
                <li className="list-group-item">Email: {users.email}</li>
            </ul>
        </div>
    )
}
export default View;