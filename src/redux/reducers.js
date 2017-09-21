import * as Constant from './Constant.js';

const initState = {
    active: 0,
    list: ['目录', '看点', '资讯'],
    showOne: { content: '第一页' },
    showTwo: { content: '第二页' },
    showThree: { content: '第三页' },
}

const change = (state = initState, action) => {
    switch (action.type) {
        case Constant.SHOW_one:
            let objOne = {showOne: {content: action.json.content}, active: action.json.active}
            return Object.assign({}, state, objOne);
        case Constant.SHOW_two:
            let objTwo = {showTwo: {content: action.json.content}, active: action.json.active}
            return Object.assign({}, state, objTwo);
        case Constant.SHOW_three:
            let objThree = {showThree: {content: action.json.content}, active: action.json.active}
            return Object.assign({}, state, objThree);
        default:
            return state;
    }
}

export default change;


