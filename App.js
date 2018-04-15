/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React, { Component } from 'react';
import {
  Platform,
} from 'react-native';
import { Provider } from 'react-redux';

import stores from './src/radux/store'
import Navigation from './src/router/Navigation';

import './src/config/Global'

const store = stores()

// 那么 radux 机制就是在这里注入数据，单向数据流的开端就在这里了，末端就在 reducers 里面
class App extends Component {
  render() {
    return (
        // 将store作为属性传递给Provider组件中
        // 可以看到的是真正渲染出的东西是<Navigation/>标签返回的东西
        <Provider store={store}>
            <Navigation />
        </Provider>
    );
  }
}

export default App
