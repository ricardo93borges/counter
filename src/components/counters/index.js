import React, { PureComponent } from 'react';
import Counter from '../counter/index'
import { connect } from 'react-redux'

class CountersContainer extends PureComponent {

    render () {
        const counters = [0,0,0]         
        return (
            <div  style={{display:'flex', justifyContent:'space-around'}}>            
                {counters.map((item, index) => (                
                        <Counter
                            key={index}
                            counter={this.props.counter}
                            increment={this.props.increment}
                            decrement={this.props.decrement}
                        />
                    
                ))}
            </div>

        )
    }
}

const mapStateToProps = (state) => ({ counter: state})

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch({type:'INCREMENT'}),
    decrement: () => dispatch({type:'DECREMENT'})
})

export default connect(mapStateToProps, mapDispatchToProps)(CountersContainer)