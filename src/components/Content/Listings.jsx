import React from 'react';
import './AppCard.css';
import ListingItem from './ListingItem';

class Listings extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        
        return (
            <ul className='list-group'>
                <li className="list-group-item font-weight-bold">Listings</li>
                <ListingItem text='Listing 1'/>
                <ListingItem text='Listing 2'/>
                <ListingItem text='Listing 3'/>
                <ListingItem text='Listing 4'/>
                <ListingItem text='Listing 5'/>
            </ul>
        )
    }
}
export default Listings;