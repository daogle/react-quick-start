import React from "react";

export default class Item extends React.Component {

    constructor(props) {
        super(props);

        this.handleDeleteItem = this.handleDeleteItem.bind(this);
    }

    handleDeleteItem() {
        const {handleDelete, index} = this.props;
        handleDelete(index)
    }

    render() {
        const {content} = this.props;
        return (
            <li onClick={this.handleDeleteItem}>{content}</li>
        );
    }
}