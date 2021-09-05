import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const AddUser = () => {
    let history = useHistory();
    const [users, setUser] = useState({
        name: "",
        username: "",
        email: "",
    })
    const { name, username, email } = users;
    const onInputChange = (e) => {
        setUser({ ...users, [e.target.name]: e.target.value });
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3001/users', users);
        history.push('/');
    }
    return (
        <div className="conatiner "  >
            <div className="w-75 mx-auto shadow p-5">
                <h1 className="text-center mb-4">Add User</h1>
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

                    <button type="submit" className="btn btn-primary w-100">Add User</button>

                </form>
            </div>
        </div>
    )
}
export default AddUser;