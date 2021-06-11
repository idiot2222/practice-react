import React from 'react';
import "./style/NavItem.scss";

const NavItem = props => {
    return (
        <div className="NavItem">
            {props.name}
        </div>
    );
}

export default NavItem;