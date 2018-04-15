import {applyMiddleware,createStore,compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {persistStore, persistCombineReducers} from 'redux-persist'
import reconciler from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import storage from 'redux-persist/es/storage'

import {logger,crashReporter} from '@app/radux/middleware/loggerMiddleware'
import rootReducers from '@app/radux/reducers'
import sagas from '@app/radux/sagas'

const sagaMiddleware = createSagaMiddleware()

// 自定义一个logger中间件，该中间件的目的是打印出当前的触发的action以及出发后的state变化。
const middleWares = [
    logger,
    crashReporter,
    sagaMiddleware
]

const config = {
    key: 'root',
    storage,
    stateReconciler: reconciler, //合并模式
    debug: false
}

const reducers = persistCombineReducers(config, rootReducers)

// applyMiddleware会将中间件应用在redux action过程中
const enhances = [applyMiddleware(...middleWares)]

export default configureStore = (initialState) => {
    // 首先必须明确的是，整个应用只有一个单一的 reducer 函数：这个函数是传给 createStore 的第一个参数。
    const store = createStore(reducers, initialState, compose(...enhances))

    // 使用了redux-persist这个第三方插件来将store对象存储到本地，以及从本地恢复数据到store中，比如说保存登录信息，下次打开应用可以直接跳过登录界面。
    persistStore(store)
    sagaMiddleware.run(sagas)
    return store
}
