import { createContext } from "react";

const params = new URLSearchParams(document.location.search);
const endpoint = params.get("instance");

export const URLContext = createContext(endpoint);
export const ContactContext = createContext({ number: "", name: "Home" });
