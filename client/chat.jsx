import {fetchJSON} from "./index";
import {useLoader} from "./application";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

function ChatMessage({ message: { user, message } }) {
    return (
        <>
            <h3>{user}</h3>
            <div>{message}</div>
        </>
    );
}

export function AddMessage() {
    const [user, setUser] = useState();
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const {loading, data, error} = useLoader(async () =>{
        return await fetchJSON("/api/login")
    });

    async function handleSubmit(e) {
        setUser(JSON.stringify(data.name))
        e.preventDefault();
        await fetchJSON("/api/chat", {
            method: "post",
            json: { user, message },
        });
        setUser();
        setMessage("");
        navigate("/");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Add message</h1>
                <div>
                    <input value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
}
