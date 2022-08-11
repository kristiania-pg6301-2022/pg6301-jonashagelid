import {fetchJSON} from "./index";
import {useLoader} from "./application";

function ChatMessage({ message: { user, message } }) {
    return (
        <>
            <h3>{user}</h3>
            <div>{message}</div>
        </>
    );
}

export function ListChats() {
    const { loading, error, data } = useLoader(async () =>
        fetchJSON("/api/chat")
    );

    if (loading) {
        return <div>Loading...</div>;
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
            <h1>Messages</h1>

            {data.map((messages) => (
                <ChatMessage key={messages.user} message={messages} />
            ))}
        </div>
    );
}

export function Chat() {
    return null;
}