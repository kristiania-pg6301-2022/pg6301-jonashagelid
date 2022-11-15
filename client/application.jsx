import {BrowserRouter, Route, Routes} from "react-router-dom";
import {FrontPage} from "./frontPage";
import {Login} from "./login";
import {LoginCallback} from "./loginCallback";
import {AddMessage} from "./chat";
import React from "react";
import {Chatlog} from "./chatlog";
import {Profile} from "./profile";


export function Application() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<FrontPage/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/login/callback"} element={<LoginCallback/>}/>
                <Route path={"/chat"} element={<AddMessage/>}/>
                <Route path={"/chatLog"} element={<Chatlog />}/>
                <Route path={"/profile"} element={<Profile/>}/>
            </Routes>
        </BrowserRouter>
    );
}