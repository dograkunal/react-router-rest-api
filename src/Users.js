import React from 'react'
import axios from 'axios';
const initialState = {
    name: '',
    age: '',
    live: ''
}
function Users() {
    const [userArr, setuserArr] = React.useState([]);
    const [usersForm, setusersForm] = React.useState(initialState)
    const [hasUserSubmit, sethasUserSubmit] = React.useState(false)
    async function fetchUsers() {
        try {
            const { data: { data } } = await axios.get('http://localhost:1234/users');
            if (data) {
                console.log(data, 'users list');
                setuserArr(data);
            }

        } catch (error) {

        }
    }
    React.useEffect(() => {
        fetchUsers();
    }, [hasUserSubmit])

    const handleChange = (e) => {
        const { value, name } = e.target;
        setusersForm({ ...usersForm, [name]: value });
    }
    const handleSubmit = async () => {
        const res = await axios.post('http://localhost:1234/user', usersForm);
        if (res) {
            console.log(res, 'success res');
            setusersForm(initialState);
            sethasUserSubmit(!hasUserSubmit);
        }
    }
    return (
        <div>
            <h1>Users component</h1>
            <div className="row">
                {
                    userArr && userArr.map((el, index) => (
                        <div key={index} className="col-4 card">
                            <h2>{el.name}</h2>
                            <h5>{el.age}</h5>
                            <p>{el.live}</p>
                        </div>
                    ))
                }
            </div>
            <div className="users-form">
                <input placeholder="name" name="name" type="text" onChange={handleChange} />
                <br />
                <input placeholder="age" name="age" type="number" onChange={handleChange} />
                <br />
                <input placeholder="live" name="live" type="text" onChange={handleChange} />
                <button onClick={handleSubmit}>
                    submit
                </button>
            </div>
        </div>
    )
}

export default Users
