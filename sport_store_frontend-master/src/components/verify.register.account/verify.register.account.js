import React, { Component } from 'react'
import { Link} from 'react-router-dom'
const VerifyRegisterAccount = () => (
    <div className="container text-center">
		<div className="logo-404">
		<div className='null-cart'>
		<img style={{width:"170px",height:"170px"}} src="/assets/images/home/logo.png" alt="" />
            
          </div>
		</div>
		<div className="content-404">
			<h1><b>Congratulations!!!
			</b> You have verified login successfully</h1>
			<h2><Link to="/">Trở Về Trang Chủ</Link></h2>
		</div>
	</div>
)
export default VerifyRegisterAccount