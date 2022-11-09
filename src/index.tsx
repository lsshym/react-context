import React from "react";
import ReactDOM from "react-dom/client";

import { Hello } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Hello compiler="TypeScript" framework="React" />);
