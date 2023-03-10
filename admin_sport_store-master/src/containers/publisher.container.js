import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as sportActions from "../actions/sport.action";
import Publisher from "../components/publisher/publisher";
import NavbarContainer from "./navbar.container";
import Slider from "./slider.container";
import * as userActions from "../actions/user.action";
class PublisherContainer extends Component {
  constructor() {
    super();
  }
  async componentWillMount() {
    this.props.sportActions.getPublisher();
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
      this.props.sportActions.getPublisher();
    }
  }
  render() {
    return (
      <section id="container" className="">
        <NavbarContainer />
        <Slider />
        <Publisher
          publisher={this.props.publisher}
          isadd={this.props.isadd}
          addPublisher={name => this.props.sportActions.addPublisher(name)}
          updatePublisher={(id, name) =>
            this.props.sportActions.updatePublisher(id, name)
          }
          isupdate={this.props.isupdate}
          page={this.props.page}
          totalpage={this.props.totalpage}
          backPage={() => this.props.sportActions.publisherBackPage()}
          nextPage={() => this.props.sportActions.publisherNextPage()}
          setPage={page => this.props.sportActions.publisherSetPage(page)}
        />
      </section>
    );
  }
}
const mapStateToProps = state => ({
  publisher: state.sportReducers.publisher.data,
  isadd: state.sportReducers.publisher.isadd,
  isupdate: state.sportReducers.publisher.isupdate,
  totalpage: state.sportReducers.publisher.totalpage,
  page: state.sportReducers.publisher.page,
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
)(PublisherContainer);
