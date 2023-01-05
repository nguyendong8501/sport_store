import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as sportActions from "../actions/sport.action";
import Author from "../components/author/author";
import NavbarContainer from "./navbar.container";
import Slider from "./slider.container";
import * as userActions from "../actions/user.action";
class AuthorContainer extends Component {
  constructor() {
    super();
  }
  async componentWillMount() {
    this.props.sportActions.getAuthor();
    let res = await this.props.userActions.auth();
    if (res === false) this.props.history.push("/login");
  }
  componentWillReceiveProps(nextProps) {
    if (
      nextProps.islogin !== this.props.islogin &&
      nextProps.islogin === false
    ) {
      this.props.history.push("/login");
    }
    if (nextProps.page !== this.props.page) {
      this.props.sportActions.getAuthor();
    }
  }
  render() {
    return (
      <section id="container" className="">
        <NavbarContainer />
        <Slider />
        <Author
          author={this.props.author}
          isadd={this.props.isadd}
          addAuthor={name => this.props.sportActions.addAuthor(name)}
          updateAuthor={(id, name) =>
            this.props.sportActions.updateAuthor(id, name)
          }
          isupdate={this.props.isupdate}
          page={this.props.page}
          totalpage={this.props.totalpage}
          backPage={() => this.props.sportActions.authorBackPage()}
          nextPage={() => this.props.sportActions.authorNextPage()}
          setPage={page => this.props.sportActions.authorSetPage(page)}
        />
      </section>
    );
  }
}
const mapStateToProps = state => ({
  author: state.sportReducers.author.data,
  isadd: state.sportReducers.author.isadd,
  isupdate: state.sportReducers.author.isupdate,
  islogin: state.userReducers.user.islogin,
  totalpage: state.sportReducers.author.totalpage,
  page: state.sportReducers.author.page
});

const mapDispatchToProps = dispatch => {
  return {
    sportActions: bindActionCreators(sportActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorContainer);
