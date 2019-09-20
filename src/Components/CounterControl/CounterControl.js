import React, {Component} from 'react';


class CounterControl extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.clicked}>Click Here to Increment</button>
                <button onClick={this.props.storeclicked}>Store Result</button>
            </div>
        )
    }
}

export default CounterControl;