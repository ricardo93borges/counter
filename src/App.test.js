import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT': return state+1
        case 'DECREMENT': return state-1
        default: return state
    }
}

const store = createStore(reducer)

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}
        ><App />
    </Provider>, 
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
