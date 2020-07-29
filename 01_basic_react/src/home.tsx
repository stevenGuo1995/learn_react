import React from  'react';
import FirstComponent from "./01_component";
import UseProps from "./02_props";
import UseState from "./03_state";
import Lifecycle from "./04_lifecycle";

export default class Home extends React.Component {
    render() {
        const nav01 = ["语文", "数学", "英语"];
        const nav02 = ["Java", "Python", "C++"];
        return (
            <div>
                <FirstComponent />
                <UseProps nav={ nav01 } title={ "学科导航" }/>
                <UseProps nav={ nav02 } title={ "编程语言" }/>
                <UseState />
                <Lifecycle />
            </div>
        );
    }
}