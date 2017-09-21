import 'whatwg-fetch';
import * as Constant from './Constant.js';


const change = (json, type) => {
    return {
        type,
        json
    }
}

function getJSON (url, type, active) {
    return async dispatch => {
        return await fetch(url, {
               method: 'GET',
               mode: 'cors'
           }).then(res => {
            return res.json().then(json => {
                let changeJson = {content: json, active}
                return changeJson;
            })
        }).then(data => {
            dispatch(change(data, type));
        }).catch(e => {
            console.error(e.message)
        })
    }
}


export function fetchDataByList (item) {

    return (dispatch, getState) => {
        switch (item.type) {
            case 0:
                return dispatch(getJSON('manifest.json', Constant.SHOW_one, 0));
            case 1:
                return dispatch(getJSON('list.json', Constant.SHOW_two, 1));
            case 2:
                let obj = {content: item.content, active: 2}
                return dispatch(change(obj, Constant.SHOW_three))
            default:
                break;
        }
    }
}