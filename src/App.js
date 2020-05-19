import React, { Component } from 'react'
import IdCard from './components/IdCard'
import Greetings from './components/Greetings'
import Random from './components/Random'

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Iteration 1: Id Cards</h1>
				{
					<IdCard
						lastName="Doe"
						firstName="John"
						gender="male"
						height={178}
						// birth={new Date('1992-07-14')}
						picture={<img src="https://randomuser.me/api/portraits/men/44.jpg" alt="avatar" />}
					/>
				}
				<br />
				{
					<IdCard
						lastName="Delores "
						firstName="Obrien"
						gender="female"
						height={172}
						// birth={new Date('1988-05-11')}
						picture={<img src="https://randomuser.me/api/portraits/women/44.jpg" alt="avatar" />}
					/>
				}
				<br />
				<h1>Iteration 2: Greetings</h1>
				{
					<>
						<Greetings lang="de">Ludwig</Greetings>
						<Greetings lang="fr">François</Greetings>
					</>
				}
				<br />
				<h1>Iteration 3: Random</h1>
				{
					<div>
						<Random min={1} max={6} />
						<Random min={1} max={100} />
					</div>
				}

			</div>
		);
	}
}

export default App;
