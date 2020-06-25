import React from 'react';

const alias = 'MAA_Movie-';

const side = ['Discover', 'TV & Movies', 'Movie List'];

const Sidebar = ({ currentTab, setCurrentTab }) => {

    return (
        <div className={`${alias}sidebar`}>
            <h1>MovieFlix</h1>
            <ul>
                {
                    side.map((item, index) => <li key={index} onClick={() => setCurrentTab(index)}></li>)
                }
            </ul>
            Sidebar
        </div>
    )
}

export default Sidebar;