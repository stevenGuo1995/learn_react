import React, { Component } from "react";

interface Props {

}
interface State {
}

export default class Lifecycle extends Component<Props, State> {

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        console.log("Did mount");
    }


    render() {
        return (
            <div>
                <h3>2.6 生命周期函数</h3>

            </div>
        );
    }
}