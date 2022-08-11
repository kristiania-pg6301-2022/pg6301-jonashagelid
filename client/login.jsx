import {useEffect} from "react";
import {fetchJSON} from "./index";

export function Login() {
    useEffect(async () => {
        const { authorization_endpoint } = await fetchJSON(
            "https://accounts.google.com/.well-known/openid-configuration"
        );


        const parameters = {
            response_type: "token",
            client_id: "512939144542-ktldnb2aensvu90s76fns1brnld41e5v.apps.googleusercontent.com",
            scope: "email profile",
            redirect_uri: window.location.origin + "/login/callback",
        };
        window.location.href = authorization_endpoint + "?" + new URLSearchParams(parameters);
    }, [])



    return <div>
        <h1>Loading...</h1>
    </div>;
}