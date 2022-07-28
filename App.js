import React from 'react';
import {LogBox, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './src/reducers';
import Dashboard from './src/screens/Dashboard/Dashboard';

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />
      <Dashboard />
    </Provider>
  );
};

export default App;
