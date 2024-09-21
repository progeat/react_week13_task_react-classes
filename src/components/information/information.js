import { Component } from 'react';
import { connect } from 'react-redux';
import { selectCurrentPlayer, selectIsDraw, selectIsGameEnded } from '../../selectors';
import { getCurrentInfoGameJSX } from '../../utils';
class InformationContainer extends Component {
	render() {
		const { currentPlayer, isGameEnded, isDraw } = this.props;

		const currentInfoGameJSX = getCurrentInfoGameJSX(
			currentPlayer,
			isGameEnded,
			isDraw,
		);

		return <div className="text-3xl">{currentInfoGameJSX}</div>;
	}
}

const mapStateToProps = (state) => ({
	currentPlayer: selectCurrentPlayer(state),
	isGameEnded: selectIsGameEnded(state),
	isDraw: selectIsDraw(state),
});

export const Information = connect(mapStateToProps)(InformationContainer);
