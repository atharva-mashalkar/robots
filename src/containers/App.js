import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';


class App extends Component {
	constructor() {
		super()
		this.state = {
				Robots : [],
				searchfield :''
			} 
	}

	componentDidMount (){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users =>this.setState({ Robots : users}));
		}

	onSearchChange = (event) => {
		this.setState({ searchfield : event.target.value });
			}

	render(){
		const filteredRobots =  this.state.Robots.filter(Robot => {
			return Robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		if (! this.state.Robots.length){
			return <h1>Loading</h1>
		}
		else{
			return(
				<div className ='tc'>
					<h1>RoboFriends</h1>
					<SearchBox searchChange ={this.onSearchChange}/>
					<Scroll>
						<Cardlist Robots={filteredRobots}/>
					</Scroll>
				</div>
				);
		}
	}
}

export default App; 