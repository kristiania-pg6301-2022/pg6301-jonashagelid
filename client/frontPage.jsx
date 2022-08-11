import {Link} from "react-router-dom";
import React from "react";
import {AddMessage} from "./chat";




export function FrontPage() {


    return <div>
        <h1>Chat app</h1>
        <div>
            <div><Link to={"/login"}>Login</Link></div>
            <div><Link to={"/chat"}>Chat</Link></div>
            <div><Link to={"link"} to={"/profile"}>Profile</Link></div>
        </div>

    </div>;
}