import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
//
import logo from './logo.png'

import './app.css'

class App extends Component {
	render() {
		return (
			<div className="container max-w-md mx-auto my-8">
				<header className="border-b border-grey-lighter px-2 flex justify-between items-end">
					<div>
						<img className="py-2" src={logo} width={160} alt="logo" />
					</div>

					<div className="text-right">
						<ul className="m-0 p-0">
							<li className={classes.socialLi}>
								<a className={classes.socialA} href="https://twitter.com/instantGUN" target="_blank">
									<svg className={classes.socialSvg} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
									</svg>
								</a>
							</li>
						</ul>
						<p className="py-4 text-xl font-serif">Could hosted GunDB peers available instantly</p>
						<ul className="m-0 p-0 py-2">
							<li className={classes.navLi}><a className={classes.a} href="">About</a></li>
							<li className={classes.navLi}><a className={classes.a} href="">Learn</a></li>
							<li className={classes.navLi}><a className={classes.a} href="">News</a></li>
							<li className={classes.navLi}><a className={classes.a} href="">Sign up / Sign in</a></li>
						</ul>
					</div>

				</header>
			</div>
		)
	}
}

const classes = {
	socialLi: "inline",
	socialSvg: "fill-current text-grey inline-block h-4 w-4 hover:text-black",
	navLi: "inline ml-6 py-2 border-b border-grey-lighter hover:border-black",
	a: "no-underline text-grey-dark font-thin text-sm lowercase hover:text-black"
}

export default hot(module)(App)
