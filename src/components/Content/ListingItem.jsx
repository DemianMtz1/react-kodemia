import React from 'react';
import './AppCard.css';

class ListingItem extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        
        return (
            <a href="/" className="list-group-item list-group-item-action">{this.props.text}</a>
        )
    }
}
export default ListingItem;