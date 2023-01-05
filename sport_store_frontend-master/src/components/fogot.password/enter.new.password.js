import React, { Component } from "react";
import { Link } from "react-router-dom";
class EnterNewPassword extends Component {
  constructor() {
    super();
    this.state = {
        newpassword: '',
        confirm: '',
        noti:''
    }
  }
  handleSubmit() {
    if(this.state.newpassword.length < 6) {
        this.setState({noti:'Mật khẩu phải hơn 6 kí tự'})
        return
    } else {
        this.setState({noti: ''})
    }
    if(this.state.confirm !== this.state.newpassword) {
        this.setState({
            noti: 'Xác nhận lại mật khẩu không hợp lệ'
        })
        return
    } else {
        this.setState({noti: ''})
    }
    this.props.submitEnterNewPassword();
  }
  render() {
    return (
      <div className="container text-center">
        <div className="logo-404">
        <div className='null-cart'>
			    <Link to="/"><img style={{width:"170px",height:"170px"}} src="/assets/images/home/logo.png" alt="" /></Link>
            
          </div>
        </div>
        <div className="content-404 forgotpass">
          <h1>
            <b>ENTER NEW PASSWORD</b>
          </h1>
          <p style={{ color: "tomato" }}>
            {this.state.noti}
          </p>
          <input
            type="password"
            placeholder="New Password"
            onChange={e => {this.props.setNewPassword(e.target.value) 
                this.setState({newpassword: e.target.value})}}
          />
          <br />
          <input
            type="password"
            placeholder="Confirm"
            onChange={e => {this.props.setConfirm(e.target.value)
            this.setState({confirm: e.target.value})}}
          />
          <br />
          <button
            className="btn btn-default"
            onClick={() => 
                this.handleSubmit()}
          >
            Thay đổi
          </button>
          <h2>
            <Link to="/">Trở về trang chủ</Link>
          </h2>
        </div>
      </div>
    );
  }
}
export default EnterNewPassword;
