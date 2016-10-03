import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Link, Router, Route, browserHistory } from 'react-router'
import data from './data.js'

var cssstyle = {
	backgroundColor: "lightblue",
}


var NavBar = React.createClass({
	render: function(){
		// console.log("hey from nav")
		return (
			<div style={cssstyle}>


				<center>

				<div>
				<button> <Link to='home'>Home</Link></button>
				</div>


				<div>
				<button> <Link to = 'menu'>Menu</Link></button>
				</div>

				<div>
				<button><Link to='about'>About</Link></button>
				</div>
				</center>
				{this.props.children}

			</div>
		)
	}
})


var Home = React.createClass({

	getInitialState: function(){
		return ({photo: null})
	},

	componentWillMount: function(){
		this.setState({photo: data.getImages()})
	},

	render: function(){
		// console.log('hey')
		return (
			<div>
				<center> 
				<h1>Welcome To GoodBurger!</h1>
						<img src= {this.state.photo[1]}/>
				</center>

			</div>
		)
	}
})


var Menu = React.createClass({
	
	getInitialState: function(){
		return ({menu: null})
	},

	componentWillMount: function(){
		this.setState({ menu: data.getMenu()})
	},

	render: function(){
		// console.log(this.state.menu)
		var that = this
		
		return (
			<div>
				<center>
					<h1>MENU</h1>
				</center>


				<ul style={{listStyleType:'none'}}> 
					<center>
					{Object.keys(this.state.menu).map(function(key,indx){
						console.log('rendering: ', that.state.menu[key])
						let menuItem = that.state.menu[key]

						return( <div>
								
								<h1>{key} </h1>
								<ul  style={{listStyleType:'none'}} >{menuItem.map(function(a){
									return <li><div>{a.name}</div>{a.price}</li>
								})} </ul>
								</div>
															
							)

					})}
					</center>
				</ul>
			


			</div>
		)
	}
})

 
var About = React.createClass({

	getInitialState: function(){
		return ({about: null})
	},
	
	componentWillMount: function(){
		this.setState({ about: data.getAbout()})
	},

	render: function(){
		return (
			<div>
				<center>
					<h1>About</h1>
				</center>

				<center>
					<h3>{this.state.about.restaurant_name}</h3>
					<h3>{this.state.about.restaurant_slogan}</h3>
				</center>

				<center>
					<h1>Contact</h1>
				</center>

				<center>
					<h3>{this.state.about.restaurant_address}</h3>
					<h3>{this.state.about.restaurant_email}</h3>
					<h3>{this.state.about.restaurant_phone}</h3>
				</center>

			</div>
		)
	}
})
 
var Notfound = React.createClass({

	render: function(){
		
		return (
			<div>
				<h1>404</h1>
			</div>
		)
	}
})

var Menukeys = React.createClass({
	render: function(){
		return (
			<div>

			</div>
		)
	}
})

var Menuvalues = React.createClass({
	render: function(){
		return (
			<div>

			</div>
		)
	}
})

ReactDOM.render(
  <Router history= {browserHistory}>
  	<Route  component= {NavBar}>
  		<Route path='home' component={Home}/>
  		<Route path='menu' component={Menu}> </Route>
  		<Route path='about' component={About}> </Route>
  		<Route path='*' component={Notfound}></Route>

  	</Route>
  </Router>,
  document.getElementById('root')
);
