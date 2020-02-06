import React from "react"

const Header = props => (
    <header style={{ backgroundColor: '#F1F1F1', textAlign: 'center', padding: 15, }}>
        <h1>{props.children}</h1>
    </header>
);
export default Header;