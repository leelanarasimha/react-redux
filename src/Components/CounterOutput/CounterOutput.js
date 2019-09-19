import React, {Component} from 'react';

class CounterOutput extends Component {
    render() {
        return (
            <div>
                <div>{this.props.counter}</div>
            </div>
        )
    }
}

export default CounterOutput;