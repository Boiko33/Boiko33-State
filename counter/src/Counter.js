import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {count: 0}
        this.addCount = this.addCount.bind(this);
    }

    addCount() {
        this.setState(state => ({count: state.count + 1}));
    }

    render() {
        return (
            <div>
                <p>
                    Count = {this.state.count}
                </p>
                <button onClick={this.addCount}>
                    Add
                </button>
            </div>
        );
    }
}

export default Counter;