import {useLoader} from "./useLoader";
import {fetchJSON} from "./index";
import React from "react";

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
            <h4>
                {data.name}
            </h4>
            <div>
                <img src={data.picture} alt={"Profile picture"}/>
            </div>
        </div>
    );
}