import { Button } from "antd";
import React, { FunctionComponent } from "react";
import './TestView.scss'
interface TestViewProps {
    
}
 
const TestView: FunctionComponent<TestViewProps> = () => {
    return (
        <div className="TestView">
            <Button>测试</Button>
        </div>
    );
}
 
export default TestView;