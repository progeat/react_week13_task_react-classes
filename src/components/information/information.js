import { InformationLayout } from './information-layout';
import { getCurrentInfoGameJSX } from '../../utils';
import { useSelector } from 'react-redux';
import { selectCurrentPlayer, selectIsDraw, selectIsGameEnded } from '../../selectors';

export const Information = () => {
	const currentPlayer = useSelector(selectCurrentPlayer);
	const isDraw = useSelector(selectIsDraw);
	const isGameEnded = useSelector(selectIsGameEnded);

	const currentInfoGameJSX = getCurrentInfoGameJSX(currentPlayer, isGameEnded, isDraw);

	return (
		<>
			<InformationLayout>{currentInfoGameJSX}</InformationLayout>
		</>
	);
};
