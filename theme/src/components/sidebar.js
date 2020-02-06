import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
    <li style={{ }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

const Sidebar = props => (
    <nav className="sidebar">
        {props.children}
        <ul style={{ listStyle: `none` }}>
            {props.menu.items.map((item, key) => {
                return getLink(item, key)
            })}
        </ul>
    </nav>
);
export default Sidebar;

function getLink(item, key) {
    if (item.value) {
        return (
            <ListLink to={item.value}>{item.title}</ListLink>
        )
    }
}