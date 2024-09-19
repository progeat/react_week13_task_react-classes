export const getCurrentInfoGameJSX = (currentPlayer, isGameEnded, isDraw) =>
	isGameEnded
		? `Победа: ${currentPlayer}`
		: isDraw
			? 'Ничья'
			: `Текущий ход: ${currentPlayer}`;
