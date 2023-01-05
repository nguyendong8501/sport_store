import React, { Component } from 'react'
import { Link } from 'react-router-dom'
const ForgotPassword = ({ setEmail, submit, notification }) => (
	<div className="container text-center">
		<div className="logo-404">
		<div className='null-cart'>
			<Link to="/"><img style={{width:"170px",height:"170px"}} src="/assets/images/home/logo.png" alt="" /></Link>
            
          </div>
			
		</div>
		<div className="content-404 forgotpass">
			<h1><b>Quên mật khẩu
			</b></h1>
			<span>{notification}</span>
			<input
			type="email"
				placeholder="Email"
				onChange={e => setEmail(e.target.value)}
			/>
			<br />
			<button
				className="btn btn-default"
				onClick={() => submit()}
			>
				Lấy mã
			</button>
			<h2><Link to="/">Trở về trang chủ</Link></h2>
		</div>
	</div>
)
export default ForgotPassword