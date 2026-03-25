import React from "react";
import { NavBar } from "antd-mobile";
import { PropTypes } from "mobx-react";

const NavBarAgain = function NavBarAgain(props) {
    let {title} = props
    const handleBack = () => {

    }
    return <div className="nav-bar-again-box">
        <NavBar onClick={handleBack}>{title}</NavBar>
    </div>;
};
// default
NavBarAgain.defaultProps ={
    title: 'Profile'
}
// Type Checking
NavBarAgain.propTypes = {
    title: PropTypes.string
}
export default NavBarAgain