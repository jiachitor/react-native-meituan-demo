

/*
* 文章显示只有一篇，请求数据时最多也只能有一种
*   1.解释当请求今天文章花费10s,请求特定一天今天文章需要4s当请求今天文章后2s后请求特定一天文章结果是
*       6s后特定一天文章出来了，刷新。10s后今天文章刷新出来了，这结果显然不对吧。
*       正常是2s后取消当前正在请求的所以文章，在进行新的请求这样才对，这就是下面的写法的解释。
*   2. 解释下take加cancel可以编写出takeLatest，fork第一个参数:需是 Generator 函数, 或者返回 Promise 的普通函数
* */
function* watchRequestArticle() {
    let lastTask
    // while (true) {
    //     const action = yield take(sagaRequestActions)
    //     if (lastTask) {
    //         yield cancel(lastTask)
    //     }
    //     yield put({type: REFRESH_ARTICLE_DOING})
    //     switch (action.type) {
    //         case SAGA_TODAY_ARTICLE:
    //             lastTask = yield fork(dealtData,action)
    //             break
    //         case SAGA_PREV_ARTICLE:
    //             lastTask = yield fork(dealtData,action)
    //             break
    //         case SAGA_NEXT_ARTICLE:
    //             lastTask = yield fork(dealtData,action)
    //             break
    //         case SAGA_RANDOM_ARTICLE:
    //             lastTask = yield fork(dealtData,action)
    //             break
    //     }
    // }
}

export default watchRequestArticle
