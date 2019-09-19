import React, {Component} from 'react';

class CounterResult extends Component {
    render() {
        const resultsdata = [];
        console.log(this.props.results);
        for (let result of this.props.results) {
            resultsdata.push(<div 
                key={result.id}
                onClick={() => this.props.deleteresult(result.id)}>{result.value}</div>);
        }

        console.log(resultsdata);

        return (
            <div>
                {resultsdata}
            </div>
        )
    }
}

export default CounterResult;
