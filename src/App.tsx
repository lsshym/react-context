import React from "react";
import "./App.scss";

import png from "./assets/bc.png";
export interface HelloProps {
    compiler: string;
    framework: string;
}
export const Hello = (props: HelloProps) => (
    <h1>
        <img src={png} alt="" />
        Hello from {props.compiler} and {props.framework}!
    </h1>
);
