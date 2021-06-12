import React from 'react'
import { CustomInput } from './CustomInput'
export const CustomForm= ({ handleSubmit, state, setState }) => {

    return (
        <form className="bg-light p-4" onSubmit={handleSubmit}>
            <h2 className="mb-4">Log in</h2>
            {
                Object.entries(state).map(([key, name])=> {
                    return(
                        <CustomInput 
                            key={key}
                            type={key == "password" ? key: 'text'}
                            name={key}
                            state={state}
                            value={name}
                            setState={setState}
                        />
                    )
                })
            }

            <button type="submit" className="btn btn-dark w-100 mt-4">Submit</button>
        </form>
    )
}

