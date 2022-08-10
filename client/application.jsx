import {BrowserRouter, Route, Routes} from "react-router-dom";
import {FrontPage} from "./frontPage";
import {Login} from "./login";
import {LoginCallback} from "./loginCallback";
import {Chat} from "./chat";
import React from "react";

export function Application() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<FrontPage/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/login/callback"} element={<LoginCallback/>}/>
                <Route path={"/chat"} element={<Chat/>}/>
            </Routes>
        </BrowserRouter>
    );
}