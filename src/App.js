import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyDE1Q9y0SZgchV9keJBnPop3SaXkpg_DI8',
    authDomain: 'manager-81612.firebaseapp.com',
    databaseURL: 'https://manager-81612.firebaseio.com',
    projectId: 'manager-81612',
    storageBucket: 'manager-81612.appspot.com',
    messagingSenderId: '300596847185'
  };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
          <Router />
      </Provider>
    );
  }
}

export default App;
