import React from "react";
import Navigation from "../Navigation";

function Header(props) {
    const {currentTab, setCurrentTab} = props;

    return (
        <header>
            <div>
                <h2>Hanad's Portfolio</h2>
            </div>
            <div className="contact-box">
                <p>Contact Information: hanadali805@gmail.com | Phone: +47 92239511</p>
            </div>
            <div>
                <Navigation currentTab={currentTab}
                    setCurrentTab={setCurrentTab}></Navigation>
            </div>
        </header>
    );
}

export default Header;
