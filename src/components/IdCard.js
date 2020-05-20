import React, { Component } from 'react';

// Iteration 1: Component: ID Card
// Create a IdCard component with 6 props:

// lastName: A string
// firstName: A string
// gender: A string, 'male' or 'female'
// height: A number
// birth: A date
// picture: A string

class IdCard extends Component {
	render() {
		const { firstName, lastName, gender, height, birth, picture } = this.props;
		return (
			<div>
				<div>{picture}</div>
				<p>
					First Name: {firstName} <br />
					Last Name: {lastName} <br />
					Gender: {gender} <br />
					Height: {height} <br />
					Birth: {birth}
				</p>
			</div>
		);
	}
}

export default IdCard;
