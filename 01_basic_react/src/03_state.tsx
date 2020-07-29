import React, { Component } from "react";

interface Props {

}
interface State {
    count: any,
    flag: Boolean,
}

export default class UseState extends Component<Props, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            count: 10,
            flag: true,
        }
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    clickHandler = () => {
        console.log(this);
    }

    changeFlag = () => {
        this.setState({
            flag: !this.state.flag
        })
    }

    render() {
        let showView = this.state.flag ? '我是孙悟空' : '我是假的孙悟空'
        return (
            <div>
                <h3>2.5 组件的State</h3>
                <p>{ this.state.count }</p>
                <button onClick={ this.increment }>增加</button>
                <button onClick={ this.decrement }>减少</button>
                <button onClick={ this.clickHandler }>关于this</button>
                <p>{ showView }</p>
                <button onClick={ this.changeFlag }>真假孙悟空</button>
            </div>
        );
    }
}