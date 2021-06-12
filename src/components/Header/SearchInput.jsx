import React from 'react'
import Styles from './SearchInput.module.css'
class SearchInput extends React.Component {
    render() {
        return (
            <div>
                <input type="text" className={`form-control ${Styles.SearchInput}`} />
            </div>
        )
    }
}

export default SearchInput;
