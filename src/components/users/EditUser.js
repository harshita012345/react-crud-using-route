/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

const EditUser = () => {
    let history = useHistory();
    const { id } = useParams();
    const [users, setUser] = useState({
        name: "",
        username: "",
        email: "",
    })
    const { name, username, email } = users;
    const onInputChange = (e) => {
        setUser({ ...users, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        loadUsers();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3001/users/${id}`, users);
        history.push('/');
    }
    const loadUsers = async () => {
        const result = await axios.get(`http://localhost:3001/users/${id}`);
        setUser(result.data)
        console.log(result);
    }
    return (
        <div>
            <div className="w-75 mx-auto shadow p-5">
                <h1 className="text-center mb-4">Edit User</h1>
                <form onSubmit={e => { onSubmit(e) }}>
                    <div className="form-group mb-3">
                        <input type="text" className="form-control form-control-lg"
                            placeholder="Enter the name" name="name"
                            value={name}
                            onChange={e => { onInputChange(e) }}
                        ></input>
                    </div>

                    <div className="form-group mb-3">
                        <input type="text" className="form-control form-control-lg"
                            placeholder="Enter the Username" name="username"
                            value={username}
                            onChange={e => { onInputChange(e) }}
                        ></input>
                    </div>

                    <div className="form-group mb-3">
                        <input type="text" className="form-control form-control-lg"
                            placeholder="Enter the Email" name="email"
                            value={email}
                            onChange={e => { onInputChange(e) }}
                        ></input>
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Edit User</button>

                </form>
            </div>
        </div>
    )
}
export default EditUser;