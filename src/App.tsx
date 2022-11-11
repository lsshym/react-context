import React from "react";
import "./App.scss";
import 'antd/dist/antd.css';

import png from "./assets/bc.png";
import TestView from "./views/TestView/TestView";
export interface HelloProps {
    compiler: string;
    framework: string;
}
const App = (props: HelloProps) => (
    <div className="app">
        <TestView></TestView>
    </div>
);
export default App;
