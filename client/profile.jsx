import {useLoader} from "./useLoader";
import {fetchJSON} from "./index";
import React from "react";
import {Link} from "react-router-dom";

export function Profile() {
    const {loading, data, error} = useLoader(async () => {
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
            <Link to={"/"}>Back</Link>
            <h1>Profile</h1>
            <h4>
                {data.name} ({data.email})
            </h4>
            <div>
                <img src={data.picture} alt={"Profile picture"}/>
            </div>
        </div>
    );
}