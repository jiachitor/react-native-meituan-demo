/**
 * 简单的没有异步处理的action放在这里
 * 复杂的异步请求和处理的数据放在sagas里处理
 * 其实可以不用写，但如果以后逻辑发生改变时，它的作用就显现了，
 * 尽量将逻辑层和视图层分开
 * */

/*
 action是一个普通对象，用于指明是哪种操作，这样才能在reducers中进行识别。
*/

/*
同步action与异步action最大的区别是：
同步只返回一个普通action对象。而异步操作中途会返回一个promise函数。当然在promise函数处理完毕后也会返回一个普通action对象。
thunk中间件就是判断如果返回的是函数，则不传导给reducer，直到检测到是普通action对象，才交由reducer处理。
*/


import {ADD_QUERY, COLLECT_ARTICLE,SAGA_TODAY_ARTICLE,SAGA_NEXT_ARTICLE,SAGA_PREV_ARTICLE,SAGA_RANDOM_ARTICLE,SPLASH_HIDE,SPLASH_SHOW,CHANGE_ARTICLE,
    FONT_SIZE_SMALL,FONT_SIZE_MIDDLE,FONT_SIZE_LARGE,MAIN_BG_1,MAIN_BG_2,MAIN_BG_3,MAIN_BG_4,SWITCH_THEME_MODEL,SWITCH_STYLES_MODAL_STATE
} from '@app/radux/constants/ActionTypes'

export const addQuery = (data) => ({
    type: ADD_QUERY,
    articleData: data,
})







export const collect = () => ({
    type: COLLECT_ARTICLE
})

export const changeArticle = (article) => ({
    type: CHANGE_ARTICLE,
    articleData: article,
})

export const changeFontSize = (index) => {
    let type = FONT_SIZE_SMALL
    switch (index) {
        case 0:
            type = FONT_SIZE_SMALL
            break
        case 1:
            type = FONT_SIZE_MIDDLE
            break
        case 2:
            type = FONT_SIZE_LARGE
            break
    }
    return {
        type: type
    }
}

export const changeBgColor = (index) => {
    let type = MAIN_BG_1
    switch (index) {
        case 1:
            type = MAIN_BG_2
            break
        case 2:
            type = MAIN_BG_3
            break
        case 3:
            type = MAIN_BG_4
            break
    }
    return {
        type: type
    }
}

export const switchThemeModel = () => ({
    type: SWITCH_THEME_MODEL
})

export const switchStylesModalState = (modalState) => ({
    type: SWITCH_STYLES_MODAL_STATE,
    modalState,
})

export const hideSplash = () => ({
    type: SPLASH_HIDE
})

export const showSplash = () => ({
    type: SPLASH_SHOW
})

export const todayArticle = () => ({
    type: SAGA_TODAY_ARTICLE
})

export const preArticle = () => ({
    type: SAGA_PREV_ARTICLE
})

export const nextArticle = () => ({
    type: SAGA_NEXT_ARTICLE
})

export const randomArticle = () => ({
    type: SAGA_RANDOM_ARTICLE
})
