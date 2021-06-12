import React from 'react'

export const CustomInput = ({name, type, state, setState, value}) => {
    return (
        <div className="form-group my-4">
            <label>{name.charAt(0).toUpperCase()+name.slice(1, name.length)} </label>
            <input
                className="form-control"
                onChange={ev=> setState({...state, [ev.target.name]: ev.target.value})}
                name={name}
                type={type ? type: 'text'}
                value={value}
            />
        </div>
    )
}
