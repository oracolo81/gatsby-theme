import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }} className={`menu-item${props.path === props.to ? ' active' : ''}`}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

const Navbar = props => (
    <nav id="top-navigation">
        {props.logo && <img src={props.logo} alt="Logo" width="40" />}
        <ul style={{ listStyle: `none`, float: `right` }}>
            {props.menu.items.map((item, key) => {
                return getLink(item, props.path, key)
            })}
        </ul>
    </nav>
);
export default Navbar;

function getLink(item, path, key) {
    if (item.value) {
        return (
            <ListLink to={item.value} path={path}>{item.title}</ListLink>
        )
    }
}