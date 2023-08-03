import React from "react";


const Form = (props) => {
    const { change, submit, errors } = props;
    const { UserName, email, password, tos } = props.values;

    const onChange = (e) => {
        const { name, value, checked, type } = e.target;
        const newVal = type === "checkbox" ? checked : value;
        change(name, newVal);
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
        submit();
    }
        return (
            <div>
                <h1> Cool forms  </h1>
                <p>{errors.UserName}</p>
                <p>{errors.password}</p>
                <p>{errors.email}</p>
                <p>{errors.tos}</p>
                <form onSubmit={onSubmit}>
                    <label>Name:
                        <input
                            type="text"
                            name="UserName"
                            value={UserName}
                            onChange={onChange}
                        />
                    </label>
                    <label> Email:
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={onChange}
                        />
                    </label>
                    <label> Password:
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={onChange}
                        />
                    </label>
                    <label> Terms of Service:
                        <input
                            type="checkbox"
                            name="tos"
                            checked={tos}
                            onChange={onChange}
                        />
                    </label>
                    <input type="submit" value="Create a Friend!"/>
                </form>
            </div>
        )
    }

export default Form;