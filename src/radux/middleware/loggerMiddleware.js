/*
redux设计如此简洁，以至于并没有进行异步处理的功能。但是留下了middleware这个概念。
可以自己编写符合需要的中间件。目前第三方的中间件基本可以完成一个复杂应用的架构设计。
*/

// 就是判断action是否是函数，如果是函数进行递归式的操作。所以在redux中的异步，只能出现在action中，而且还需要有中间件的支持。

const logger = store => next => action => {
    if (typeof action === 'function') console.log('dispatching a function');
    else console.log('loggerMiddleware dispatch',action);
    let result = next(action);
    console.log('loggerMiddleware next state',store.getState());
    return result;
}

const crashReporter = store => next => action => {
    try {
        return next(action)
    } catch (err) {
        console.error('crashReporterMiddleware Caught an exception!', err)
        Raven.captureException(err, {
            extra: {
                action,
                state: store.getState()
            }
        })
        throw err
    }
}

export  {logger,crashReporter}
