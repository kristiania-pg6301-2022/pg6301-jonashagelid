import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export function LoginCallback() {
    const navigate = useNavigate();

    useEffect(async()=>{
        const {access_token} = Object.fromEntries( new URLSearchParams(window.location.hash.substring(1)))
        console.log(access_token)

        await fetch("/api/login", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({access_token})
        });


        navigate("/");
    })

    return <h1>Loading...</h1>;
}