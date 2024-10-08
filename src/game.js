import { Component } from 'react';
import { connect } from 'react-redux';
import { Information, Field } from './components';
import { handlerReset } from './handlers';
class GameContainer extends Component {
	render() {
		const { onGameReset } = this.props;

		return (
			<div className="text-center">
				<Information />
				<Field />
				<button
					className="p-2 border border-black text-xl bg-teal-300 cursor-pointer"
					onClick={onGameReset}
				>
					Начать заново
				</button>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	onGameReset: () => handlerReset(dispatch),
});

export const Game = connect(null, mapDispatchToProps)(GameContainer);
