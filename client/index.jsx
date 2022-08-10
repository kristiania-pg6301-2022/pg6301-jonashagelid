import React from "react";
import ReactDOM from "react-dom";
import {Application} from "./application";


export async function fetchJSON(url) {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Failed ${res.status}`);
    }
    return await res.json();
}

ReactDOM.render(<Application /> , document.getElementById("app"));