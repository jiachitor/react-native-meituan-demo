import {ADD_QUERY} from '@app/radux/constants/ActionTypes'

//刚进入时进行数据判断和请求，作用标记是否取消了screenpage和第一次是否请求结束
const initialState = {
    homeState: ADD_QUERY,
    query: '点击跳转'
}

export default mine = (state = initialState, action) => {
    switch (action.type) {
        case ADD_QUERY:
            return {
                ...state,
                homeState: ADD_QUERY,
                query: '已经跳转'
            }
    }
    return state
}
