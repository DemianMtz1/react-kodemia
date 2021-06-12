import React, { useState } from 'react'

function Counter() {

    const [counter, setCounter] = useState(0)

    const modifyCounter = action => {
        if (action === 'increment') {
            const newCounter = counter + 1;
            setCounter(newCounter)
            return;
        }

        const newCounter = counter - 1;
        setCounter(newCounter)
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-12">
                    <p className="text-center">{counter}</p>
                    <div className="w-100 d-flex justify-content-between">
                        <button 
                            className="btn btn-dark"
                            onClick={()=>modifyCounter('increment')}    
                        >+</button>
                        <button 
                            className="btn btn-secondary"
                            onClick={()=>modifyCounter('decrement')} 
                        >-</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter;