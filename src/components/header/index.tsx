import React from 'react'
import celeryImg from '../../resources/Celery.png'
import './index.css'

const Header = () =>
	<header className="header">
		<img src={celeryImg} className='header-logo' alt={'Company Logo'} />
		<h1 className='header-title'>Black Celery Production</h1>
	</header>

export default Header
