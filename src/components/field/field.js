import { FieldLayout } from './field-layout';
import { useSelector, useDispatch } from 'react-redux';
import {
	selectField,
	selectCurrentPlayer,
	selectIsGameEnded,
	selectIsDraw,
} from '../../selectors';
import { handlerClickCell } from '../../handlers';
import styles from './field.module.css';

export const Field = () => {
	const field = useSelector(selectField);
	const currentPlayer = useSelector(selectCurrentPlayer);
	const isGameEnded = useSelector(selectIsGameEnded);
	const isDraw = useSelector(selectIsDraw);

	const dispatch = useDispatch();

	const cells = field.map((elem, index) => (
		<button
			className={styles.button}
			key={index}
			onClick={() =>
				handlerClickCell({
					cellIndex: index,
					field,
					currentPlayer,
					isGameEnded,
					isDraw,
					dispatch,
				})
			}
		>
			{elem}
		</button>
	));

	return <FieldLayout>{cells}</FieldLayout>;
};
