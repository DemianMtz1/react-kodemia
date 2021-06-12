import React from 'react';
import Styles from './AppButton.module.css';

function AppButton({ type, url, text, className }) {
    if (type === 'anchor') {
        return (
            <a href={url} className={text === 'Log In' ? Styles.ButtonLogin : Styles.ButtonCreateAccount}>
                {text}
            </a>
        );
    }

    return (
        <button type='button' className={`btn btn-primary ${className ? className : ''}`}>
            {text}
        </button>
    )
}

export default AppButton;