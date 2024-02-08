import React, { useState } from 'react';
import List from './components/List';
import listSvg from './assets/img/list.svg';
import AddButtonList from './components/AddList';
function App ()
{
	return (
    <div className = 'todo'>
            <div className="todo__sidebar">
                <div>  
                    <List items={[
                    {
                        icon: (listSvg),
                        name: 'Все задачи',
                    }
                ] } />
                </div>
                <div>
                    <List
                        items={ [
                    {
                        color: 'green',
                        name: 'Покупки',
                    },
                    {
                        color: 'light-blue',
                        name: 'Фронтенд',
                        active: true,
                    },
                    {
                        color: 'pink',
                        name: 'Фильмы и сериалы',
                    }
                ] }
                    isRemovable 
                />
                </div>
                <div>
                    <AddButtonList/>
                </div>
            </div>
            <div className="todo__tasks"></div>
    </div>
	);
}

export default App;
