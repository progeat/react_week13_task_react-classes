import { GameLayout } from './game-layout';
import { useDispatch } from 'react-redux';
import { handlerReset } from './handlers';

export const Game = () => {
	const dispatch = useDispatch();

	const onClickReset = () => handlerReset(dispatch);

	return <GameLayout onClickReset={onClickReset} />;
};
