import React from 'react';
import List from '../List';
import addSvg from '../../assets/img/add.svg';

import './AddButtonList.scss';

const AddButtonList = () =>
{
    return (
        <React.Fragment>   
            <List items={ [
            {
                className: 'list__add-button',
                icon: ( addSvg ),
                name: 'Добавить список',
            }
            ] }
            />
            <div className='add-list-popup'>
            </div>
        </React.Fragment>
    );
}
export default AddButtonList;