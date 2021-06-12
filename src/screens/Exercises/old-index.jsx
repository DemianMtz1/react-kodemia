import React, { useState } from 'react'

export const Exercises = () => {

    const [USD, setUSD] = useState(0);
    const [MXN, setMXN] = useState(0);

    return (
        <div className="container container-fluid">
            <form className="bg-light p-4">
                <h2 className="mb-4">Divisas</h2>
                <div className="form-group">
                    <label>USD</label>
                    <input
                        className="form-control"
                        type="number"
                        name="USD"
                        value={Number(USD).toFixed(2)}
                        onChange={({target: {value}})=>{
                            setUSD(value)
                            setMXN(value*19.84)
                        }}
                    />
                </div>

                <div className="form-group">
                    <label>MXN</label>
                    <input
                        className="form-control"
                        type="number"
                        name="MXN"
                        value={Number(MXN).toFixed(2)}
                        onChange={({target: {value}})=>{
                            setUSD(value/19.84)
                            setMXN(value)
                        }}
                    />
                </div>
            </form>
        </div>
    )
}
