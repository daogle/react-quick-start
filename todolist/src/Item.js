import React from "react";

export default class Item extends React.Component {

    handleDeleteItem() {
        this.props.delete(this.props.index)
    }

    render() {
        return <li onClick={this.handleDeleteItem.bind(this)}>{this.props.content}</li>;
    }
}