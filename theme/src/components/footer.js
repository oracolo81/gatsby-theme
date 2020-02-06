import React from "react"

const Footer = props => (
    <footer style={{ backgroundColor: '#F1F1F1', textAlign: 'center', padding: 10, }}>
        <p>{props.children}</p>
        <p>{props.copyright}</p>
    </footer>
);
export default Footer;