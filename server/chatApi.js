import { Router } from "express";

const messages = [
    {
        user: "bob",
        message: "hei",
    },
    {
        user: "dave",
        message: "okei",
    },
];


export function ChatApi(mongoDatabase) {
    const router = new Router();

    router.get("/", async (req, res) => {
        const messages = await mongoDatabase
            .collection("messages")
            .find()
            .map(({ user, message }) => ({ user, message }))
            .toArray();
        res.json(messages);
    });

    router.post("/", (req, res) => {
        const { user, message } = req.body;
        messages.push({ user, message});
        mongoDatabase.collection("messages").insertOne({ user, message});
        res.sendStatus(204);
    });

    return router;

}