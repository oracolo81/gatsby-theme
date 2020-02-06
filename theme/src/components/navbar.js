import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

const Navbar = props => (
    <nav>
        {props.logo && <img src={props.logo} alt="Logo" />}
        <ul style={{ listStyle: `none`, float: `right` }}>
            {props.menu.items.map((item, key) => {
                return getLink(item, key)
            })}
        </ul>
    </nav>
);
export default Navbar;

function getLink(item, key) {
    if (item.value) {
        return (
            <ListLink to={item.value}>{item.title}</ListLink>
        )
    }
}