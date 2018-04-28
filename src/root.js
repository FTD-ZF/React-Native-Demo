import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './infrastructure/store/configureStore';
import rootSaga from './infrastructure/sagas';
import App from './components/Navigation/state';

const store = configureStore();
// run root saga
store.runSaga(rootSaga);

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App
          ref={ref => {
            this.rootNav = ref;
          }}
        />
      </Provider>
    );
  }
}

