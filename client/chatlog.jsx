import {fetchJSON} from "./index";
import {useLoader} from "./useLoader";



function ChatMessage({ message: { user, message } }) {
    return (
        <>
            <h3>{user}</h3>
            <div>{message}</div>
        </>
    );
}

export function Chatlog() {
    const { loading, error, data } = useLoader(async () => {
        return fetchJSON("/api/chat");
    });

    if (loading) {
        return <div>Loading.... </div>;
    }
    if (error) {
        return (
            <div>
                <h1>Error</h1>
                <div>{error.toString()}</div>
            </div>
        );
    }

    return (
        <div>
            {data.map((messages) => (
                <ChatMessage key={messages.user} message={messages} />
            ))}
        </div>
    );
}