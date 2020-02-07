import React from 'react';
import Item from "./Item";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            inputValue: ''
        };

        this.handleInputValue = this.handleInputValue.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleBtnClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        });
    }

    handleInputValue(e) {
        this.setState({
            inputValue: e.target.value
        });
    }

    handleItemClick(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({list});
    }

    getItems() {
        return this.state.list.map((item, index) => {
            return (
                <Item key={index}
                      index={index}
                      content={item}
                      handleDelete={this.handleItemClick}/>
            )
        });
    }

    render() {
        return (
            <div>
                <div>
                    <input type="text" value={this.state.inputValue} onChange={this.handleInputValue}/>
                    <button onClick={this.handleBtnClick}>add</button>
                </div>
                <ul>{this.getItems()}</ul>
            </div>
        );
    }
}

export default App;
