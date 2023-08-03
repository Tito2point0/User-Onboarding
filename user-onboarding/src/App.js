import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import axios from 'axios';

import schema from './validation/formSchema';
import * as yup from 'yup';

const initialFormValues = {
  UserName: '',
  email: '',
  password: '',
  tos: false,
}
const initialFormErrors = {
  UserName: '',
  email: '',
  password: '',
  tos: false,
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
const [users, setUsers] = useState([])

  const handleSubmit = () => { 
    axios.post('https://reqres.in/api/users', formValues)
      .then(res => { 
        setUsers([...users, res.data])
        console.log(res.data)
      })
      .catch(err => console.log(err))
    .finally((() => setFormValues(initialFormValues)))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const handleChange = (name, value) => { 
    validate(name, value);
    setFormValues({...formValues, [name]: value})
  }

  return (
    <div className="App">
      <Form
        values={formValues}
        change={handleChange}
        errors={formErrors}
        submit={handleSubmit}
      />
      {users.map(user => (
        <div key={user.id} >
          <p>{user.createdAt}</p>
          <p>{user.email}</p>
          <p>{user.UserName}</p>
        </div>
      ))}
    </div>
  );
}

export default App;

