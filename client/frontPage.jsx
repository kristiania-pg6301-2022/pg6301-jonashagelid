import {Link} from "react-router-dom";
import React from "react";

export function FrontPage() {
    return <div>
        <h3>Chat app</h3>
        <diV><Link to={"/login"}>Login</Link></diV>
        <diV><Link to={"/chat"}>Chat</Link></diV>
        <diV><Link to={"/profile"}>profile</Link></diV>

    </div>;
}