import { sportTypes } from '../constants/action.types'
import { combineReducers } from 'redux'
const category = (state = { data: [], page: 1, totalpage: null }, action) => {
    switch (action.type) {
        case sportTypes.SET_CATEGORY_SPORT: {
            return {
                ...state,
                data: action.data
            }
        }
        case sportTypes.ADD_CATEGORY_SUCCESS: {
            return {
                ...state,
                isadd: true
            }
        }
        case sportTypes.ADD_CATEGORY_FAIL: {
            return {
                ...state,
                isadd: false
            }
        }
        case sportTypes.UPDATE_CATEGORY_SUCCESS: {
            return {
                ...state,
                isupdate: true
            }
        }
        case sportTypes.UPDATE_CATEGORY_FAIL: {
            return {
                ...state,
                isupdate: false
            }
        }
        case sportTypes.RESET_CATEGORY: {
            return {
                ...state,
                isadd: null,
                isupdate: null
            }
        }
        case sportTypes.CATEGORY_SET_PAGE: {
            return {
                ...state,
                page: action.page
            }
        }
        case sportTypes.CATEGORY_SET_TOTAL_PAGE: {
            return {
                ...state,
                totalpage: action.totalpage
            }
        }
        case sportTypes.UPDATE_ISSEND_SUCCESS: {
            return {
                ...state,
                isupdate: true
            }
        }
        case sportTypes.UPDATE_ISSEND_FAIL: {
            return {
                ...state,
                isupdate: false
            }
        }
        default: return state
    }
}
const publisher = (state = { data: [], page: 1, totalpage: null }, action) => {
    switch (action.type) {
        case sportTypes.SET_PUBLISHSER: {
            return {
                ...state,
                data: action.data
            }
        }
        case sportTypes.ADD_PUBLISHER_SUCCESS: {
            return {
                ...state,
                isadd: true
            }
        }
        case sportTypes.ADD_PUBLISHER_FAIL: {
            return {
                ...state,
                isadd: false
            }
        }
        case sportTypes.UPDATE_PUBLISHER_SUCCESS: {
            return {
                ...state,
                isupdate: true
            }
        }
        case sportTypes.UPDATE_PUBLISHER_FAIL: {
            return {
                ...state,
                isupdate: false
            }
        }
        case sportTypes.RESET_PUBLISHER: {
            return {
                ...state,
                isadd: null,
                isupdate: null
            }
        }
        case sportTypes.PUBLISHER_SET_PAGE: {
            return {
                ...state,
                page: action.page
            }
        }
        case sportTypes.PUBLISHER_SET_TOTAL_PAGE: {
            return {
                ...state,
                totalpage: action.totalpage
            }
        }
        default: return state
    }
}
const author = (state = {data: [], page: 1, totalpage: null}, action) => {
    switch(action.type) {
        case sportTypes.SET_AUTHOR: {
            return {
                ...state,
                data: action.data
            }
        }
        case sportTypes.ADD_AUTHOR_SUCCESS: {
            return {
                ...state,
                isadd: true
            }
        }
        case sportTypes.ADD_AUTHOR_FAIL: {
            return {
                ...state,
                isadd: false
            }
        }
        case sportTypes.UPDATE_AUTHOR_SUCCESS: {
            return {
                ...state,
                isupdate: true
            }
        }
        case sportTypes.UPDATE_AUTHOR_FAIL: {
            return {
                ...state,
                isupdate: false
            }
        }
        case sportTypes.RESET_AUTHOR: {
            return {
                ...state,
                isadd: null,
                isupdate: null
            }
        }
        case sportTypes.AUTHOR_SET_PAGE: {
            return {
                ...state,
                page: action.page
            }
        }
        case sportTypes.AUTHOR_SET_TOTAL_PAGE: {
            return {
                ...state,
                totalpage: action.totalpage
            }
        }
        default: return state
    }
}
const bill = (state = { data: [], page: 1, totalpage: null}, action) => {
    switch(action.type) {
        case sportTypes.BILL_SET_PAGE: {
            return {
                ...state,
                page: action.page
            }
        }
        case sportTypes.BILL_SET_TOTAL_PAGE: {
            return {
                ...state,
                totalpage: action.totalpage
            }
        }
        case sportTypes.BILL_SET_DATA: {
            return {
                ...state,
                data: action.data
            }
        }
        default: return state
    }
}
const sport = (state = {
    data: [], page: 1, totalpage: null
}, action) => {
    switch(action.type){
        case sportTypes.SET_SPORT: {
            return {
                ...state, 
                data: action.data
            }
        }
        case sportTypes.SET_PAGE: {
            return {
                ...state,
                page: action.page
            }
        }
        case sportTypes.SET_TOTAL_PAGE: {
            return {
                ...state,
                totalpage: action.totalpage
            }
        }
        case sportTypes.ADD_SPORT_SUCCESS: {
            return {
                ...state,
                isadd: true
            }
        }
        case sportTypes.ADD_SPORT_FAIL: {
            return {
                ...state,
                isadd: false
            }
        }
        case sportTypes.UPDATE_SPORT_SUCCESS: {
            return {
                ...state,
                isupdate: true
            }
        }
        case sportTypes.UPDATE_SPORT_FAIL: {
            return {
                ...state,
                isupdate: false
            }
        }
        case sportTypes.RESET_SPORT: {
            return {
                ...state,
                isadd: null,
                isupdate: null
            }
        }
        default: return state
    }
}
export default combineReducers({
    category,
    publisher,
    sport, 
    author,
    bill
})