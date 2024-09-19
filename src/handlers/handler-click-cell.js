import { SET_DRAW, SET_GAME_ENDED, setCurrentPlayer, setField } from '../actions';
import { WIN_PATTERNS } from '../constants';

export const handlerClickCell = ({
	cellIndex,
	field,
	currentPlayer,
	isGameEnded,
	isDraw,
	dispatch,
}) => {
	if (field[cellIndex] === '' && !isGameEnded) {
		const updateField = field.map((elem, index) =>
			cellIndex === index ? currentPlayer : elem,
		);

		dispatch(setField(updateField));

		const isWinner = WIN_PATTERNS.some((pattern) =>
			pattern.every((indexPattern) => updateField[indexPattern] === currentPlayer),
		);

		if (isWinner) {
			dispatch(SET_GAME_ENDED);
		} else {
			const newCurrentPlayer = currentPlayer === 'X' ? '0' : 'X';
			dispatch(setCurrentPlayer(newCurrentPlayer));
		}

		const isFullCells = updateField.every((cell) => cell !== '');

		if (!isDraw && isFullCells && !isGameEnded) {
			dispatch(SET_DRAW);
		}
	}
};
