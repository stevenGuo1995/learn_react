import React from "react";

// 用类的形式创建组件
class FirstComponent extends React.Component {
    // 渲染函数
    render() {
        return (
            <div>
                <h1>Hello, React</h1>
                <p>This is the first component</p>
            </div>
        );
    }
}

export default FirstComponent;