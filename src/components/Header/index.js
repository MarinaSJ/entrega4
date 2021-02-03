import React from 'react';

import './style.css';


function Header(title,title1,title2,title3,title4,title5,title6){
    return(
        <div className="header">
            <h1>{title}</h1>
            <h1>{title1}</h1>
            <h1>{title2}</h1>
            <h1>{title3}</h1>
            <h1>{title4}</h1>
            <h1>{title5}</h1>
            <h1>{title6}</h1>
        </div>
    )
}

export default Header;