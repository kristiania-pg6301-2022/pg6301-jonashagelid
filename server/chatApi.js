import { Router } from "express";

export function ChatApi(mongoDatabase) {
    const router = new Router();

    router.get("/", async (req, res) => {
        const chats = await mongoDatabase.collection("messages").find().toArray();
        res.json(chats);
    });

    router.post("/new", (req, res) => {
        res.sendStatus(500);
    });

    return router;

}