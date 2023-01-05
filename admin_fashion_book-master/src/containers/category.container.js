import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as sportActions from '../actions/sport.action'
import Category from '../components/category/category'
import NavbarContainer from "./navbar.container";
import Slider from "./slider.container";
import * as userActions from "../actions/user.action";
class CategoryContainer extends Component {
    constructor() {
        super()
    }
    async componentWillMount() {
        this.props.sportActions.getCategory()
        let res = await this.props.userActions.auth()
        if (res === false)
            this.props.history.push('/login')
    }
    componentWillReceiveProps(nextProps) {
        if (
          nextProps.islogin !== this.props.islogin &&
          nextProps.islogin === false
        ) {
          this.props.history.push("/login");
        }
        if (nextProps.page !== this.props.page) {
            this.props.sportActions.getCategory();
          }
      }
    render() {
        return (
            <section id="container" className="">
            <NavbarContainer/>
            <Slider/>
            <Category
                category={this.props.category}
                addCategory={(name) => this.props.sportActions.addCategory(name)}
                isadd={this.props.isadd}
                updateCategory={(id, name) => this.props.sportActions.updateCategory(id, name)}
                isupdate={this.props.isupdate}
                page={this.props.page}
                totalpage={this.props.totalpage}
                backPage={() => this.props.sportActions.categoryBackPage()}
                nextPage={() => this.props.sportActions.categoryNextPage()}
                setPage={page => this.props.sportActions.categorySetPage(page)}
            />
            </section>
            
        )
    }
}
const mapStateToProps = state => ({
    category: state.sportReducers.category.data,
    isadd: state.sportReducers.category.isadd,
    isupdate: state.sportReducers.category.isupdate,
    islogin: state.userReducers.user.islogin,
    totalpage: state.sportReducers.category.totalpage,
    page: state.sportReducers.category.page
})

const mapDispatchToProps = dispatch => {
    return ({
        sportActions: bindActionCreators(sportActions, dispatch),
        userActions: bindActionCreators(userActions, dispatch)
    })
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryContainer)