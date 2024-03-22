import React from "react";
//import ReactDOM from "react-dom";
import { createRoot } from "react-dom";
import "./index.css";
import App from "./App.js";

const root = document.getElementById("root");
const rootRoot = createRoot(root); // Usa createRoot para iniciar la renderización

rootRoot.render(<App />); // Renderiza tu aplicación dentro de createRoot
