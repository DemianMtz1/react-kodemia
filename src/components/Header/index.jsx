import React from 'react'
import AppThemeToggle from '../AppThemeToggle';
import AppButton from '../Sidenav/AppButton';
import Styles from './Header.module.css'
import HeaderLogo from './HeaderLogo'
import SearchInput from './SearchInput';

class Header extends React.Component {

    render() {
        return (
            <nav className={`shadow-sm ${Styles.Header}`}>
                <div className="container d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center justify-content-between">
                        <HeaderLogo />
                        <SearchInput />
                    </div>

                    <div className="d-flex align-items-center">
                        <AppButton
                            text='Log In'
                            type='anchor'
                            url='https://www.notion.so/Dashboard-11g-Javascript-70aea81669fa4c2181af2b1d2df6c27f'
                        />
                        <AppButton
                            text='Create Account'
                            type='anchor'
                            url='https://www.notion.so/Dashboard-11g-Javascript-70aea81669fa4c2181af2b1d2df6c27f'
                        />
                        <AppThemeToggle />
                    </div>
                </div>

            </nav>
        )
    }
}

export default Header;
