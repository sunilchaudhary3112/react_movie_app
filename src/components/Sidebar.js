import React from 'react';

const alias = 'MAA_Movie-';

const side = ['Discover', 'TV & Movies', 'Movie List'];

const Sidebar = ({ currentTab, setCurrentTab }) => {

    return (
        <div className={`${alias}sidebar`}>
            <h1>MovieFlix</h1>
            <ul>
                {
                    side.map((item, index) => <li className={currentTab == index ? 'curentTab' : ''} key={index} onClick={() => setCurrentTab(index)}>
                        {item}
                    </li>)
                }
            </ul>
        </div>
    )
}

export default Sidebar;