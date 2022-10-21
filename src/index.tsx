import React from "react";
import ReactDOM from "react-dom";

import { Hello } from "./App";

import test from './test'
console.log(test)
ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("root")
);
