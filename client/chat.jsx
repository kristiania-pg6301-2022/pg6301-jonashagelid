import {fetchJSON} from "./index";
import {Link, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {Chatlog} from "./chatlog";
import {useLoader} from "./useLoader";



export function AddMessage() {

    const [user, setUser] = useState();
    const [message, setMessage] = useState("");
    const navigate = useNavigate();



    const {loading, data, error} = useLoader(async () =>{
        return await fetchJSON("/api/login")
    });



    async function handleSubmit(e) {
        setUser(JSON.stringify(data.name))
        console.log({user})
        e.preventDefault();
        await fetchJSON("/api/chat", {
            method: "post",
            json: { user, message },
        });
        setMessage("");
        navigate("/");


    }

    return (
        <div>
            <Link to={"/"}>Back</Link>
            <h1>Chat app</h1>
            <Chatlog />
            <form onSubmit={handleSubmit}>
                <h3>Add message</h3>
                <div>
                    <input value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
}
