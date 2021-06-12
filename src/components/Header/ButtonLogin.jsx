import React from 'react'
import Styles from './ButtonLogIn.module.css';
class ButtonLogin extends React.Component {

    constructor(props) {
        super(props)
        console.log(props);
    }

    render() {
        return (
            <div>
                <button className={`${Styles.ButtonLogin}`}>Log In</button>
            </div>
        )
    }
}

export default ButtonLogin;
