import { Information, Field } from './components';
import styles from './game.module.css';

export const GameLayout = ({ onClickReset }) => {
	return (
		<div className={styles.game}>
			<Information />
			<Field />
			<button className={styles['button-reset']} onClick={onClickReset}>
				Начать заново
			</button>
		</div>
	);
};
