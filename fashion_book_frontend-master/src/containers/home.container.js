import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import Home from '../components/home/home'
import * as userActions from '../actions/user.action'
import * as homeActions from '../actions/home.action'
import * as productActions from '../actions/product.action'
import Loading from '../components/loading/loading'
import {sortTypes} from '../constants/action.types'
import localStore from '../config/storage.config'
class HomeContainer extends React.Component {
    constructor(props) {
        super(props)

    }
    componentWillMount() {
        this.props.actions.auth()
        this.props.homeActions.getCategory()
        this.props.homeActions.getPublisher()
        this.props.homeActions.getSport()
        this.props.homeActions.getAuthor()
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.page !== this.props.page) {
            this.props.homeActions.getSport()
        }
    }
    
    render() {
        const {category, publisher, sport, totalpage} = this.props
        if(category !== null && publisher !== null && sport !== null && totalpage !== null) {
            return (
                <div>
                    <Home
                        islogin={this.props.islogin}
                        logout={() => this.props.actions.logout()}
                        category={this.props.category}
                        publisher={this.props.publisher}
                        sport={this.props.sport}
                        totalpage={this.props.totalpage}
                        backPage={() => this.props.homeActions.backPage()}
                        nextPage={() => this.props.homeActions.nextPage()}
                        setPage={(page) => this.props.homeActions.setPage(page)}
                        page={this.props.page}
                        sortType={this.props.sortType}
                        setSortType={(value) => this.props.homeActions.setSortType(value)}
                        setRangeType={(range) => this.props.homeActions.setRangeType(range)}
                        title={this.props.title}
                        setTitle={(title) => this.props.homeActions.setTitle(title)}
                        setBranch={(branch) => this.props.homeActions.setBranch(branch)}
                        branch={this.props.branch}
                        setSearchText={(value) => this.props.homeActions.setSearchText(value)}
                        author={this.props.author}
                        setIDBranch={(id) => this.props.homeActions.setIDBranch(id)}
                        branchClick={(branch, id) => this.props.homeActions.branchClick(branch, id)}
                        history={this.props.history}
                        searchTextSubmit={() => this.props.homeActions.searchTextSubmit()}
                        addToCart={(product) => this.props.productActions.addToCart(product)}
                    />
                </div>
            )
        }
        else {
            return (
                <Loading/>
            )
        }
    }
}
const mapStateToProps = state => ({
    islogin: state.userReducers.login.islogin,
    category: state.homeReducers.category.data,
    publisher: state.homeReducers.publisher.data,
    author: state.homeReducers.author.data,
    sport: state.homeReducers.sport.data, 
    totalpage: state.homeReducers.sport.totalpage,
    page: state.homeReducers.sport.page, 
    sortType: state.homeReducers.sport.sortType,
    title: state.homeReducers.sport.title,
    branch: state.homeReducers.sport.branch
})

const mapDispatchToProps = dispatch =>{
    return ({
        actions: bindActionCreators(userActions, dispatch),
        homeActions: bindActionCreators(homeActions, dispatch),
        productActions: bindActionCreators(productActions, dispatch)
    })
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer)