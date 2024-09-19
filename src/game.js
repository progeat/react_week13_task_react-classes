import { GameLayout } from './game-layout';
import { useDispatch } from 'react-redux';
import { handlerReset } from './handlers';
import { Component } from 'react';

export const Game = () => {
	const dispatch = useDispatch();

	const onClickReset = () => handlerReset(dispatch);

	return <GameLayout onClickReset={onClickReset} />;
};

export class GameOld extends Component {
	onClickReset() {
		handlerReset(dispatch);
	}

	render() {
		return (
			<div className={styles.game}>
				<Information />
				<Field />
				<button className={styles['button-reset']} onClick={this.onClickReset}>
					Начать заново
				</button>
			</div>
		);
	}
}
