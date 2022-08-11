import {BrowserRouter, Route, Routes} from "react-router-dom";
import {FrontPage} from "./frontPage";
import {Login} from "./login";
import {LoginCallback} from "./loginCallback";
import {Chat, ListChats} from "./chat";
import React, {useEffect, useState} from "react";
import {fetchJSON} from "./index";

export function useLoader(loadingFn) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();
    const [error, setError] = useState();

    async function load() {
        try {
            setLoading(true);
            setData(await loadingFn());
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => load(), []);
    return { loading, data, error };
}

export function Profile() {
    const {loading, data, error} = useLoader(async () =>{
        return await fetchJSON("/api/login")
    });


    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error {error.toString()}</div>
    }

    return (
        <div>
            <h1>
                Profile for {data.name} ({data.email})
            </h1>
            <div>
                <img src={data.picture} alt={"Profile picture"} />
            </div>
        </div>
    );
}


export function Application() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<FrontPage/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/login/callback"} element={<LoginCallback/>}/>
                <Route path={"/chat"} element={<ListChats/>}/>
                <Route path={"/profile"} element={<Profile/>}/>
            </Routes>
        </BrowserRouter>
    );
}