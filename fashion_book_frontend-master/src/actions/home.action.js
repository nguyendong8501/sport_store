import axios from 'axios'
import { homeTypes, sortTypes } from '../constants/action.types'
export const getCategory = () => async (dispatch, getState) =>  {
    let res
    try {
        res = await axios.get('http://localhost:8080/category')
    }
    catch (err) {
        return
    }
    dispatch(setCategory(res.data.data))
}

export const getPublisher = () => async (dispatch, getState) => {
    let res
    try {
        res = await axios.get('http://localhost:8080/publisher')
    }
    catch (err) {
        return
    }
    dispatch(setPublisher(res.data.data))
}

export const getAuthor = () => async (dispatch, getState) => {
    let res
    try {
        res = await axios.get('http://localhost:8080/author')
    }
    catch(err) {
        return
    }
    dispatch(setAuthor(res.data.data))
}
export const getSport = () => async (dispatch, getState) => {
    let sorttype = 'release_date'
    let sortorder = '-1'
    let sortType = getState().homeReducers.sport.sortType
    if (sortType === sortTypes.SORT_DAY_DECREASED) {
        sorttype = 'release_date'
        sortorder = '-1'
    } else if (sortType === sortTypes.SORT_DAY_INCREASED) {
        sorttype = 'release_date'
        sortorder = '1'
    } else if (sortType === sortTypes.SORT_PRICE_DECREASED) {
        sorttype = 'price'
        sortorder = '-1'
    } else if (sortType === sortTypes.SORT_PRICE_INCREASED) {
        sorttype = 'price'
        sortorder = '1'
    } else if (sortType === sortTypes.SORT_SALES_DECREASED) {
        sorttype = 'sales'
        sortorder = '-1'
    } else if (sortType === sortTypes.SORT_SALES_INCREASED) {
        sorttype = 'sales'
        sortorder = '1'
    } else if (sortType === sortTypes.SORT_VIEWS_DECREASED) {
        sorttype = 'view_counts'
        sortorder = '-1'
    } else if (sortType === sortTypes.SORT_VIEWS_INCREASED) {
        sorttype = 'view_counts'
        sortorder = '1'
    }
    let branch = getState().homeReducers.sport.branch
    let _link = 'http://localhost:8080/product/allproduct'
    if(branch === 'category') { 
        _link = 'http://localhost:8080/product/category'
    } else if (branch === 'publisher') {
        _link = 'http://localhost:8080/product/publisher'
    } else if(branch === 'author') {
        _link = 'http://localhost:8080/product/author'
    }
    let res
    try {
        res = await axios.post(_link, {
            page: getState().homeReducers.sport.page,
            range: null,
            sorttype: sorttype,
            sortorder: sortorder,
            searchtext: getState().homeReducers.sport.searchtext,
            id: getState().homeReducers.sport.id
        })
    }
    catch (err) {
        console.log(err.response)
        return
    }
    dispatch(setSport(res.data.data))
    dispatch(setTotalPage(res.data.totalPage))
}

export const setSport = (data) => ({
    type: homeTypes.SET_SPORT,
    data
})
export const setPage = (page) => ({
    type: homeTypes.SET_PAGE,
    page
})
export const setTotalPage = (totalpage) => ({
    type: homeTypes.SET_TOTAL_PAGE,
    totalpage
})
export const setCategory = (data) => ({
    type: homeTypes.SET_CATEGORY_SPORT,
    data
})

export const setPublisher = (data) => ({
    type: homeTypes.SET_PUBLISHSER,
    data
})

export const setAuthor = (data) => ({
    type: homeTypes.SET_AUTHOR,
    data
})
export const setIDBranch = (id) => ({
    type: homeTypes.SET_ID_BRANCH,
    id
})
export const backPage = () => (dispatch, getState) => {
    let page = getState().homeReducers.sport.page
    if(page > 1) {
        dispatch(setPage(parseInt(page) - 1))
    }
}

export const nextPage = () => (dispatch, getState) => {
    let page = getState().homeReducers.sport.page
    let totalpage = getState().homeReducers.sport.totalpage
    if(page < totalpage) {
        dispatch(setPage(parseInt(page) + 1))
    }
}
export const setSortType = (sortType) => async (dispatch, getState) => {
    dispatch(setPage(1))
    let sorttype = 'release_date'
    let sortorder = '-1'
    if (sortType === sortTypes.SORT_DAY_DECREASED) {
        sorttype = 'release_date'
        sortorder = '-1'
    } else if (sortType === sortTypes.SORT_DAY_INCREASED) {
        sorttype = 'release_date'
        sortorder = '1'
    } else if (sortType === sortTypes.SORT_PRICE_DECREASED) {
        sorttype = 'price'
        sortorder = '-1'
    } else if (sortType === sortTypes.SORT_PRICE_INCREASED) {
        sorttype = 'price'
        sortorder = '1'
    } else if (sortType === sortTypes.SORT_SALES_DECREASED) {
        sorttype = 'sales'
        sortorder = '-1'
    } else if (sortType === sortTypes.SORT_SALES_INCREASED) {
        sorttype = 'sales'
        sortorder = '1'
    } else if (sortType === sortTypes.SORT_VIEWS_DECREASED) {
        sorttype = 'view_counts'
        sortorder = '-1'
    } else if (sortType === sortTypes.SORT_VIEWS_INCREASED) {
        sorttype = 'view_counts'
        sortorder = '1'
    }
    dispatch(setSort(sortType, sortorder))
    let branch = getState().homeReducers.sport.branch
    let _link = 'http://localhost:8080/product/allproduct'
    if(branch === 'category') { 
        _link = 'http://localhost:8080/product/category'
    } else if (branch === 'publisher') {
        _link = 'http://localhost:8080/product/publisher'
    } else if(branch === 'author') {
        _link = 'http://localhost:8080/product/author'
    }
    let res
    try {
        res = await axios.post(_link, {
            page: 1,
            range: getState().homeReducers.sport.range,
            sorttype: sorttype,
            sortorder: sortorder,
            searchtext: getState,
            id: getState().homeReducers.sport.id,
            searchtext: undefined
        })
    }
    catch (err) {
        console.log(err.response)
        return
    }
    dispatch(setSport(res.data.data))
    dispatch(setTotalPage(res.data.totalPage))
}
export const setSort= (sortType) => ({
    type: homeTypes.SET_SORT_TYPE,
    sortType
})
export const setRangeType = (range) => async (dispatch, getState) => {
    dispatch(setPage(1))
    let sorttype = 'release_date'
    let sortorder = '-1'
    let sortType = getState().homeReducers.sport.sortType
    if (sortType === sortTypes.SORT_DAY_DECREASED) {
        sorttype = 'release_date'
        sortorder = '-1'
    } else if (sortType === sortTypes.SORT_DAY_INCREASED) {
        sorttype = 'release_date'
        sortorder = '1'
    } else if (sortType === sortTypes.SORT_PRICE_DECREASED) {
        sorttype = 'price'
        sortorder = '-1'
    } else if (sortType === sortTypes.SORT_PRICE_INCREASED) {
        sorttype = 'price'
        sortorder = '1'
    } else if (sortType === sortTypes.SORT_SALES_DECREASED) {
        sorttype = 'sales'
        sortorder = '-1'
    } else if (sortType === sortTypes.SORT_SALES_INCREASED) {
        sorttype = 'sales'
        sortorder = '1'
    } else if (sortType === sortTypes.SORT_VIEWS_DECREASED) {
        sorttype = 'view_counts'
        sortorder = '-1'
    } else if (sortType === sortTypes.SORT_VIEWS_INCREASED) {
        sorttype = 'view_counts'
        sortorder = '1'
    }
    let branch = getState().homeReducers.sport.branch
    let _link = 'http://localhost:8080/product/allproduct'
    if(branch === 'category') { 
        _link = 'http://localhost:8080/product/category'
    } else if (branch === 'publisher') {
        _link = 'http://localhost:8080/product/publisher'
    } else if(branch === 'author') {
        _link = 'http://localhost:8080/product/author'
    }
    let res
    try {
        res = await axios.post(_link, {
            page: 1,
            range: range,
            sorttype: sorttype,
            sortorder: sortorder,
            id: getState().homeReducers.sport.id,
            searchtext: getState().homeReducers.sport.searchtext
        })
    }
    catch (err) {
        console.log(err.response)
        return
    }
    console.log(JSON.stringify(res))
    dispatch(setRange(range))
    dispatch(setSport(res.data.data))
    dispatch(setTotalPage(res.data.totalPage))
} 

export const setRange = (range) => ({
    type: homeTypes.SET_RANGE,
    range
})
 export const setBranch = (branch) => ({
     type: homeTypes.SET_BRANCH_SEARCH_SPORT,
     branch
 })
 export const setTitle = (title) => ({
     type: homeTypes.SET_NAME_TITLE_ITEM, 
     title
 })
 export const setSearchText = (searchtext) => ({
     type: homeTypes.SET_SEARCH_TEXT,
     searchtext
 })

 export const branchClick = (branch, id) => async (dispatch, getState)=> {
    let _link = 'http://localhost:8080/product/allproduct'
    if(branch === 'category') { 
        _link = 'http://localhost:8080/product/category'
    } else if (branch === 'publisher') {
        _link = 'http://localhost:8080/product/publisher'
    } else if(branch === 'author') {
        _link = 'http://localhost:8080/product/author'
    }
    let res
    try {
        res = await axios.post(_link, {
            page: 1,
            range: undefined,
            sorttype: undefined,
            sortorder: undefined,
            id: id,
            searchtext: undefined
        })
    }
    catch (err) {
        return
    }
    dispatch(setSearchText(''))
    dispatch(setSport(res.data.data))
    dispatch(setTotalPage(res.data.totalPage))
 }

 export const searchTextSubmit = () => async(dispatch, getState) => {
    dispatch(setPage(1))
    let sorttype = 'release_date'
    let sortorder = '-1'
    let sortType = getState().homeReducers.sport.sortType
    if (sortType === sortTypes.SORT_DAY_DECREASED) {
        sorttype = 'release_date'
        sortorder = '-1'
    } else if (sortType === sortTypes.SORT_DAY_INCREASED) {
        sorttype = 'release_date'
        sortorder = '1'
    } else if (sortType === sortTypes.SORT_PRICE_DECREASED) {
        sorttype = 'price'
        sortorder = '-1'
    } else if (sortType === sortTypes.SORT_PRICE_INCREASED) {
        sorttype = 'price'
        sortorder = '1'
    } else if (sortType === sortTypes.SORT_SALES_DECREASED) {
        sorttype = 'sales'
        sortorder = '-1'
    } else if (sortType === sortTypes.SORT_SALES_INCREASED) {
        sorttype = 'sales'
        sortorder = '1'
    } else if (sortType === sortTypes.SORT_VIEWS_DECREASED) {
        sorttype = 'view_counts'
        sortorder = '-1'
    } else if (sortType === sortTypes.SORT_VIEWS_INCREASED) {
        sorttype = 'view_counts'
        sortorder = '1'
    }
    let branch = getState().homeReducers.sport.branch
    let _link = 'http://localhost:8080/product/allproduct'
    if(branch === 'category') { 
        _link = 'http://localhost:8080/product/category'
    } else if (branch === 'publisher') {
        _link = 'http://localhost:8080/product/publisher'
    } else if(branch === 'author') {
        _link = 'http://localhost:8080/product/author'
    }
    let res
    try {
        res = await axios.post(_link, {
            page: 1,
            range: getState().homeReducers.sport.range,
            sorttype: sorttype,
            sortorder: sortorder,
            id: getState().homeReducers.sport.id,
            searchtext: getState().homeReducers.sport.searchtext
        })
    }
    catch (err) {
        console.log(err.response)
        return
    }
    dispatch(setSport(res.data.data))
    dispatch(setTotalPage(res.data.totalPage))
 } 