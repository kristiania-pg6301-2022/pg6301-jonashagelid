import {Link} from "react-router-dom";
import React from "react";
import {AddMessage} from "./chat";



export function FrontPage() {


    return <div>
        <h1>Chat app</h1>
        <diV><Link to={"/login"}>Login</Link></diV>
        <diV><Link to={"/chat"}>Chat</Link></diV>
        <diV><Link to={"/profile"}>Profile</Link></diV>

    </div>;
}