import express from "express";
import * as path from "path";
import cookieParser, {signedCookie} from "cookie-parser";
import bodyParser from "body-parser"
import dotenv from "dotenv";
import fetch from "node-fetch";
import { MongoClient } from "mongodb";
import {ChatApi} from "./chatApi.js";

dotenv.config();
const app = express();

const mongoClient = new MongoClient(process.env.MONGODB_URL);
mongoClient.connect().then(async () => {
    console.log("Connected to mongodb");
    app.use("/api/chat", ChatApi(mongoClient.db("pg6301-konte")));
});


app.use(bodyParser.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

async function fetchJSON(url, options) {
    const res = await fetch(url, options);
    if (!res.ok) {
        throw new Error(`Failed ${res.status}`);
    }
    return await res.json();
}

app.get("/api/login", async (req, res) =>{
    const {access_token} = req.signedCookies;

    const {userinfo_endpoint} = await fetchJSON(
        "https://accounts.google.com/.well-known/openid-configuration"
    );

    const userinfo = await fetchJSON(userinfo_endpoint, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    });

    res.json(userinfo)
});

app.post("/api/login", (req, res) =>{
    const { access_token } = req.body;
    res.cookie("access_token", access_token, {signed: true});
    res.sendStatus(200);
});

app.use(express.static("../client/dist"));
app.use((req, res, next) => {
    if (req.method === "GET" && !req.path.startsWith("/api")) {
        res.sendFile(path.resolve("../client/dist/index.html"));
    } else {
        next();
    }
});

const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Started on http://localhost:${server.address().port}`);
});