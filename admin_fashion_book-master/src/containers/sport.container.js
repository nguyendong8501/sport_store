import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as sportActions from "../actions/sport.action";
import Sport from "../components/sport/sport";
import NavbarContainer from "./navbar.container";
import Slider from "./slider.container";
import * as userActions from "../actions/user.action";
class SportContainer extends Component {
  async componentWillMount() {
    this.props.sportActions.getCategory();
    this.props.sportActions.getPublisher();
    this.props.sportActions.getSport();
    this.props.sportActions.getAuthor();
    let res = await this.props.userActions.auth();
    if (res === false) this.props.history.push("/login");
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.page !== this.props.page) {
      this.props.sportActions.getSport();
    }
    if (
      nextProps.islogin !== this.props.islogin &&
      nextProps.islogin === false
    ) {
      this.props.history.push("/login");
    }
  }
  render() {
    return (
      <section id="container" className="">
        <NavbarContainer />
        <Slider />
        <Sport
          sport={this.props.sport}
          totalpage={this.props.totalpage}
          page={this.props.page}
          category={this.props.category}
          publisher={this.props.publisher}
          author={this.props.author}
          deleteSport={id => this.props.sportActions.deleteSport(id)}
          backPage={() => this.props.sportActions.backPage()}
          nextPage={() => this.props.sportActions.nextPage()}
          setPage={page => this.props.sportActions.setPage(page)}
          isadd={this.props.isadd}
          isupdate={this.props.isupdate}
          addSport={(
            id_category,
            name,
            price,
            release_date,
            describe,
            id_nsx,
            id_author,
            file
          ) =>
            this.props.sportActions.addSport(
              id_category,
              name,
              price,
              release_date,
              describe,
              id_nsx,
              id_author,
              file
            )
          }
          updateSport={(
            id,
            name,
            id_category,
            price,
            release_date,
            describe,
            id_nsx,
            id_author,
            file
          ) =>
            this.props.sportActions.updateSport(
              id,
              name,
              id_category,
              price,
              release_date,
              describe,
              id_nsx,
              id_author,
              file
            )
          }
        />
      </section>
    );
  }
}
const mapStateToProps = state => ({
  sport: state.sportReducers.sport.data,
  totalpage: state.sportReducers.sport.totalpage,
  page: state.sportReducers.sport.page,
  category: state.sportReducers.category.data,
  publisher: state.sportReducers.publisher.data,
  author: state.sportReducers.author.data,
  isadd: state.sportReducers.sport.isadd,
  isupdate: state.sportReducers.sport.isupdate,
  islogin: state.userReducers.user.islogin
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
)(SportContainer);
