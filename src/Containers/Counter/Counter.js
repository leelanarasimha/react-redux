import React, {Component} from 'react';
import CounterControl from '../../Components/CounterControl/CounterControl.js';
import CounterOutput from '../../Components/CounterOutput/CounterOutput.js';
import CounterResult from '../../Components/CounterResult/CounterResult';
import {connect} from 'react-redux';
import * as actionTypes from '../../Store/Constants';

class Counter extends Component {
    render() {
        return (
            <div>
                <CounterOutput counter={this.props.counter}/>

                <CounterControl 
                clicked={this.props.incrementcounter}
                storeclicked={() => this.props.storeclicked(this.props.counter)}/>

                <CounterResult 
                deleteresult={(value) => this.props.ondeleteresult(value)}
                results={this.props.results}/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        counter: state.ctr.counter,
        results: state.results.results
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        incrementcounter: () => dispatch({type: actionTypes.INCREMENT}),
        ondeleteresult: (value) => {
            return dispatch({type: actionTypes.DELETE_RESULT, id: value});
        },
        storeclicked: (value) => {

            return dispatch({type: actionTypes.STORE_RESULT, value: value});
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);