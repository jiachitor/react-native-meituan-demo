import storage from 'redux-persist/es/storage'
import {persistReducer} from 'redux-persist'

import home from './home'
import mine from './mine'

/*
* 有些数据不需要存储将其忽略，有两种方法可以实现
* 1. 将所以要忽略的state放到一个或者多个reducers里面，这里面的全是需要忽略的状态
* 2. 可以保持每个reducers的特性，每个reduces需要忽略的单独去除来忽略
* 这里选择第二种，可以保持每个reducer按照自己的特性写
* */

const homeConfig = {
    key: 'home',
    storage,
    debug: false,
    blacklist: ['status']
}

const mineConfig = {
    key: 'mine',
    storage,
    debug: false,
    blacklist: ['status']
}

// 相当于分片
const reducers = {
    home: persistReducer(homeConfig, home),
    mine: persistReducer(mineConfig, mine)
}

export default reducers
