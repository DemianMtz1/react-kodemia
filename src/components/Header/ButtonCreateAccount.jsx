import React from 'react'
import Styles from './ButtonCreateAccount.module.css'
class ButtonCreateAccount extends React.Component {
    render() {
        return (
            <div>
                <button className={Styles.ButtonCreateAccount}>Create Account</button>
            </div>
        )
    }
}

export default ButtonCreateAccount;
