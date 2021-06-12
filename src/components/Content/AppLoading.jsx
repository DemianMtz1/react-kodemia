import React, { useEffect, useState } from 'react'
import './appLoading.css'

function AppLoading() {
    const [active, setActive] = useState(true);
    const activeClass = active ? 'active' : '';
    
    useEffect(() => {
        setTimeout(() => {
            setActive(false)
        }, 900)
    }, [])

    return (
        <div className={`loading ${activeClass}`}>
            <span className="w-100 d-flex justify-content-center h-100 align-items-center font-weight-bold">Loading...</span>
        </div>
    )

}

export default AppLoading;