import React from 'react';
import ReactDOM from 'react-dom';

import Home from "./home";

// 元素渲染
// function tick() {
//     const element = (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is { new Date().toLocaleTimeString() }</h2>
//         </div>
//     )
//     ReactDOM.render(
//         element,
//         document.getElementById('root') // 将element注入root
//     );
// }
// setInterval(tick, 1000);

ReactDOM.render(
    <Home />,
    document.getElementById('root')
);