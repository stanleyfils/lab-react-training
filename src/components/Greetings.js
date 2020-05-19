import React, { Component } from 'react';

// Iteration 2: Component: Greetings
// Create a Greetings component with 2 props:

// lang: A string that could be ,"de","en","es","fr"
// children: A text

const greeting = {
	de: 'Hallo',
	en: 'Hello',
	es: 'Hola',
	fr: 'Bonjour'
};

class Greetings extends Component {
	render() {
		const { lang, children } = this.props;
		return (
			<div>
				{greeting[lang]} {children}
			</div>
		);
	}
}

export default Greetings;
