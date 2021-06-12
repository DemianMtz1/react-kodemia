import React from 'react';
import MenuItem from './MenuItem';

class MenuList extends React.Component {
    constructor(props) {
        super(props)
        this.props = props;
    }

    render() {
        return (
            <ul className="list-group list-group-flush">
                <MenuItem
                    icon='https://image.flaticon.com/icons/png/512/609/609803.png'
                    text='Home' />
                <MenuItem
                    icon='https://image.flaticon.com/icons/png/512/1632/1632670.png'
                    text='Reading List' />
                <MenuItem
                    icon='https://image.flaticon.com/icons/png/512/1187/1187576.png'
                    text='Listings' />
                <MenuItem
                    icon='https://image.flaticon.com/icons/png/512/2983/2983786.png'
                    text='Podcasts' />
                <MenuItem
                    icon='https://image.flaticon.com/icons/png/512/686/686458.png'
                    text='Videos' />
                <MenuItem
                    icon='https://image.flaticon.com/icons/png/512/1374/1374863.png'
                    text='Tags' />
                <MenuItem
                    icon='https://image.flaticon.com/icons/png/512/512/512222.png'
                    text='More' />
            </ul>
        )
    }
}

export default MenuList;