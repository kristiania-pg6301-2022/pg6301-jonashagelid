import React from "react";
import ReactDOM from "react-dom";
import {Application} from "./application";


export async function fetchJSON(url, options = {}) {
    const res = await fetch(url, {
        method: options.method || "get",
        headers: options.json ? { "content-type": "application/json" } : {},
        body: options.json && JSON.stringify(options.json),
    } );
    if (!res.ok) {
        throw new Error(`Failed ${res.status}`);
    }
    return await res.json();
}

ReactDOM.render(<Application /> , document.getElementById("app"));