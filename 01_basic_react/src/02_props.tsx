import React from "react";

interface Props {
    nav: any,
    title: any
}

export default class UseProps extends React.Component<Props, any>{
    render() {
        return (
            <div>
                <h3>{ this.props.title }</h3>
                <ul>
                    {
                        this.props.nav.map((element?: any, index?: any) => {
                            return <li key={ index }>{ element }</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}
