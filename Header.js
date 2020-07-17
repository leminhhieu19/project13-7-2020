import React from 'react';
import StyledHeader from '../styles/StyledHeader';
import { Link } from "react-router-dom";
const Header = () => {
    return(
        <StyledHeader>
            <div className="menuItem">
                <div className="headerLink">
                    <Link className="change" to="/todos/list">List</Link>
                    <Link className="del" to="/del/view">Delete Item</Link>
                </div> 
            </div>

        </StyledHeader>
       
    );
    
};
export default Header;