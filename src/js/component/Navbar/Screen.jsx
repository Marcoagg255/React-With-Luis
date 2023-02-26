import React from "react";

const PageLink = (props) => {
    const myClass = "nav-link "+props.state;
    return (
        <li className="nav-item">
            <a className={myClass} aria-current="page" href="#">{props.pageName}</a>
        </li>
    );
}
export default PageLink;