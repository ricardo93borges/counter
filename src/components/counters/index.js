import React, { PureComponent } from 'react';
import Counter from './counter'
import { connect } from 'react-redux'
import { addCounter, removeCounter, increment, decrement } from '../../reducers/counters/action-creators.js'

class CountersContainer extends PureComponent {

    render () {
        return (
            <div>
                <div  style={{display:'flex', justifyContent:'space-around'}}>            
                    {this.props.counters.map((counter, index) => (
                        <Counter 
                            key={index} 
                            counter={counter} 
                            removeCounter={this.props.removeCounter(index)} 
                            increment={this.props.increment(index)}
                            decrement={this.props.decrement(index)}
                        />
                    ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 10 }}>
                    <button onClick={this.props.addCounter}>ADD</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ counters: state})

const mapDispatchToProps = (dispatch) => ({
    increment: (index) => () => dispatch(increment(index)),
    decrement: (index) => () => dispatch(decrement(index)),
    addCounter: () => dispatch(addCounter()),
    removeCounter: (index) => () => dispatch(removeCounter(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(CountersContainer)