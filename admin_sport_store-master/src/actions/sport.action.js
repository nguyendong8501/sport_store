import axios from 'axios'
import { sportTypes } from '../constants/action.types'
export const getSport = () => async (dispatch, getState) => {
    let res
    try {
        res = await axios.post('http://localhost:8080/product/allproduct', {
            page: getState().sportReducers.sport.page,
            range: null
        })
    }
    catch (err) {
        console.log(err)
        return
    }
    dispatch(setSport(res.data.data))
    dispatch(setTotalPage(res.data.totalPage))
}
export const setSport = (data) => ({
    type: sportTypes.SET_SPORT,
    data
})
export const setPage = (page) => ({
    type: sportTypes.SET_PAGE,
    page
})
export const setTotalPage = (totalpage) => ({
    type: sportTypes.SET_TOTAL_PAGE,
    totalpage
})
export const authorSetPage = (page) => ({
    type: sportTypes.AUTHOR_SET_PAGE,
    page
})
export const authorSetTotalPage = (totalpage) => ({
    type: sportTypes.AUTHOR_SET_TOTAL_PAGE,
    totalpage
})
export const categorySetPage = (page) => ({
    type: sportTypes.CATEGORY_SET_PAGE,
    page
})
export const categorySetTotalPage = (totalpage) => ({
    type: sportTypes.CATEGORY_SET_TOTAL_PAGE,
    totalpage
})
export const publisherSetPage = (page) => ({
    type: sportTypes.PUBLISHER_SET_PAGE,
    page
})
export const publisherSetTotalPage = (totalpage) => ({
    type: sportTypes.PUBLISHER_SET_TOTAL_PAGE,
    totalpage
})
export const deleteSport = (id) => async(dispatch, getState) => {
    let res
    try {
        res = await axios.get('http://localhost:8080/admin/deleteproduct/' +id)
    }
    catch (err) {
        console.log(err)
        return
    }
    console.log(res)
    dispatch(getSport())
}

export const getCategory = () => async (dispatch, getState) =>  {
    let res
    try {
        res = await axios.get('http://localhost:8080/category/all/' + getState().sportReducers.category.page)
    }
    catch (err) {
        return
    }
    dispatch(setCategory(res.data.data))
    dispatch(categorySetTotalPage(res.data.totalPage))
}

export const getPublisher = () => async (dispatch, getState) => {
    let res
    try {
        res = await axios.get('http://localhost:8080/publisher/all/' + getState().sportReducers.publisher.page)
    }
    catch (err) {
        return
    }
    dispatch(setPublisher(res.data.data))
    dispatch(publisherSetTotalPage(res.data.totalPage))
}

export const getAuthor = () => async (dispatch, getState) => {
    let res
    try {
        res = await axios.get('http://localhost:8080/author/all/' + getState().sportReducers.author.page)
    }
    catch(err) {
        return
    }
    dispatch(setAuthor(res.data.data))
    dispatch(authorSetTotalPage(res.data.totalPage))
}

export const setCategory = (data) => ({
    type: sportTypes.SET_CATEGORY_SPORT,
    data
})

export const setPublisher = (data) => ({
    type: sportTypes.SET_PUBLISHSER,
    data
})

export const setAuthor = (data) => ({
    type: sportTypes.SET_AUTHOR,
    data
})
export const addCategorySuccess = () =>({
    type: sportTypes.ADD_CATEGORY_SUCCESS
})
export const addCategotyFail = () => ({
    type: sportTypes.ADD_CATEGORY_FAIL
})
export const updateCategorySuccess = () => ({
    type: sportTypes.UPDATE_CATEGORY_SUCCESS
})
export const updateCategoryFail = () => ({
    type: sportTypes.UPDATE_CATEGORY_FAIL
})
export const resetCategory = () => ({
    type: sportTypes.RESET_CATEGORY
})
export const addCategory =  (name) => async (dispatch, getState) => {
    dispatch(resetCategory())
    let res
    try {
        res = await axios.post('http://localhost:8080/admin/addcategory', {
            name: name
        })
    }
    catch(err) {
        dispatch(addCategotyFail())
        return
    } 
    dispatch(addCategorySuccess())
    dispatch(getCategory())
}

export const updateCategory =  (id, name) => async (dispatch, getState) => {
    let res
    try {
        res = await axios.post('http://localhost:8080/admin/updatecategory', {
            id: id,
            name: name
        })
    }
    catch(err) {
        dispatch(updateCategoryFail())
        return
    } 
    dispatch(updateCategorySuccess())
    dispatch(getCategory())
}
export const addAuthorSuccess = () =>({
    type: sportTypes.ADD_AUTHOR_SUCCESS
})
export const addAuthorFail = () => ({
    type: sportTypes.ADD_AUTHOR_FAIL
})
export const updateAuthorSuccess = () => ({
    type: sportTypes.UPDATE_AUTHOR_SUCCESS
})
export const updateAuthorFail = () => ({
    type: sportTypes.UPDATE_AUTHOR_FAIL
})
export const resetAuthor = () => ({
    type: sportTypes.RESET_AUTHOR
})
export const addAuthor =  (name) => async (dispatch, getState) => {
    dispatch(resetAuthor())
    let res
    try {
        res = await axios.post('http://localhost:8080/admin/addauthor', {
            name: name
        })
    }
    catch(err) {
        dispatch(addAuthorFail())
        return
    } 
    dispatch(addAuthorSuccess())
    dispatch(getAuthor())
}

export const updateAuthor =  (id, name) => async (dispatch, getState) => {
    let res
    try {
        res = await axios.post('http://localhost:8080/admin/updateauthor', {
            id: id,
            name: name
        })
    }
    catch(err) {
        dispatch(updateAuthorFail())
        return
    } 
    dispatch(updateAuthorSuccess())
    dispatch(getAuthor())
}
export const addPublisherSuccess = () =>({
    type: sportTypes.ADD_PUBLISHER_SUCCESS
})
export const addPublisherFail = () => ({
    type: sportTypes.ADD_PUBLISHER_FAIL
})
export const updatePublisherSuccess = () => ({
    type: sportTypes.UPDATE_PUBLISHER_SUCCESS
})
export const updatePublisherFail = () => ({
    type: sportTypes.UPDATE_PUBLISHER_FAIL
})
export const resetPublisher = () => ({
    type: sportTypes.RESET_PUBLISHER
})
export const addPublisher =  (name) => async (dispatch, getState) => {
    dispatch(resetPublisher())
    let res
    try {
        res = await axios.post('http://localhost:8080/admin/addpublisher', {
            name: name
        })
    }
    catch(err) {
        dispatch(addPublisherFail())
        return
    } 
    dispatch(addPublisherSuccess())
    dispatch(getPublisher())
}

export const updatePublisher =  (id, name) => async (dispatch, getState) => {
    let res
    try {
        res = await axios.post('http://localhost:8080/admin/updatepublisher', {
            id: id,
            name: name
        })
    }
    catch(err) {
        dispatch(updatePublisherFail())
        return
    } 
    dispatch(updatePublisherSuccess())
    dispatch(getPublisher())
}
export const backPage = () => (dispatch, getState) => {
    let page = getState().sportReducers.sport.page
    if(page > 1) {
        dispatch(setPage(parseInt(page) - 1))
    }
}

export const nextPage = () => (dispatch, getState) => {
    let page = getState().sportReducers.author.page
    let totalpage = getState().sportReducers.author.totalpage
    if(page < totalpage) {
        dispatch(setPage(parseInt(page) + 1))
    }
}
export const authorBackPage = () => (dispatch, getState) => {
    let page = getState().sportReducers.sport.page
    if(page > 1) {
        dispatch(authorSetPage(parseInt(page) - 1))
    }
}

export const authorNextPage = () => (dispatch, getState) => {
    let page = getState().sportReducers.author.page
    let totalpage = getState().sportReducers.author.totalpage
    if(page < totalpage) {
        dispatch(authorSetPage(parseInt(page) + 1))
    }
}
export const categoryBackPage = () => (dispatch, getState) => {
    let page = getState().sportReducers.category.page
    if(page > 1) {
        dispatch(categorySetPage(parseInt(page) - 1))
    }
}

export const categoryNextPage = () => (dispatch, getState) => {
    let page = getState().sportReducers.category.page
    let totalpage = getState().sportReducers.category.totalpage
    if(page < totalpage) {
        dispatch(categorySetPage(parseInt(page) + 1))
    }
}
export const publisherBackPage = () => (dispatch, getState) => {
    let page = getState().sportReducers.publisher.page
    if(page > 1) {
        dispatch(publisherSetPage(parseInt(page) - 1))
    }
}

export const publisherNextPage = () => (dispatch, getState) => {
    let page = getState().sportReducers.publisher.page
    let totalpage = getState().sportReducers.publisher.totalpage
    if(page < totalpage) {
        dispatch(publisherSetPage(parseInt(page) + 1))
    }
}
export const billBackPage = () => (dispatch, getState) => {
    let page = getState().sportReducers.bill.page
    if(page > 1) {
        dispatch(billSetPage(parseInt(page) - 1))
    }
}

export const billNextPage = () => (dispatch, getState) => {
    let page = getState().sportReducers.bill.page
    let totalpage = getState().sportReducers.bill.totalpage
    if(page < totalpage) {
        dispatch(billSetPage(parseInt(page) + 1))
    }
}
export const addSportSuccess = () => ({
    type: sportTypes.ADD_SPORT_SUCCESS
})
export const addSportFail = () => ({
    type: sportTypes.ADD_SPORT_FAIL
})
export const updateSportSuccess = () => ({
    type: sportTypes.UPDATE_SPORT_SUCCESS
})
export const updateSportFail = () => ({
    type: sportTypes.UPDATE_SPORT_FAIL
})
export const addSport = (id_category, name, price, release_date, describe, id_nsx, id_author, file) =>
 async (dispatch, getState) => {
    let data = new FormData()
    data.append('file', file)
    data.append('id_category', id_category) 
    data.append('name', name) 
    data.append('price', price)  
    data.append('release_date', release_date)
    data.append('describe', describe)
    data.append('id_nsx', id_nsx)
    data.append('id_author', id_author)
    let res
    try {
        res = await axios.post('http://localhost:8080/admin/addproduct', data)
    }
    catch(err) {
        dispatch(addSportFail())
        return
    } 
    dispatch(addSportSuccess())
    dispatch(getSport())
}
export const updateSport = (id, name, id_category, price, release_date, describe, id_nsx, id_author, file) => async (dispatch, getState) => {
    let data = new FormData()
    data.append('file', file)
    data.append('id', id)
    data.append('id_category', id_category) 
    data.append('name', name) 
    data.append('price', price)  
    data.append('release_date', release_date)
    data.append('describe', describe)
    data.append('id_nsx', id_nsx)
    data.append('id_author', id_author)
    let res
    try {
        res = await axios.post('http://localhost:8080/admin/updateproduct', data)
    }
    catch(err) {
        dispatch(updateSportFail())
        return
    } 
    dispatch(updateSportSuccess())
    dispatch(getSport())
}
export const setBill = (data) => ({
    type: sportTypes.BILL_SET_DATA,
    data
})
export const billSetPage = (page) => ({
    type: sportTypes.BILL_SET_PAGE,
    page
})
export const billSetTotalPage = (totalpage) => ({
    type: sportTypes.BILL_SET_TOTAL_PAGE,
    totalpage
})
export const getBill = (status) => async(dispatch, getState) => {
    let link = "http://localhost:8080/bill/status/99"
    if(status === "0") {
        link = "http://localhost:8080/bill/status/0"
    }
    if(status === "1") {
        link = "http://localhost:8080/bill/status/1"
    }
    let res = null
    try {
       res =  await axios.get(link)
    }
    catch(err) {
        return
    }
    dispatch(setBill(res.data.data))
    dispatch(billSetTotalPage(res.data.totalPage))

}
export const updateIssendSuccess = () => ({
    type: sportTypes.UPDATE_ISSEND_SUCCESS
})
export const updateIssendFail = () => ({
    type: sportTypes.UPDATE_ISSEND_FAIL
})

export const updateIssend = (name,id) => async (dispatch, getState) => {
    let res
    try {
        console.log(typeof name);
        res = await axios.post('http://localhost:8080/bill/updateissend', {
        name: name,
        id:id
        })
    }
    catch(err) {
        
        dispatch(updateIssendFail())
        return
    } 
    dispatch(updateIssendSuccess())
}