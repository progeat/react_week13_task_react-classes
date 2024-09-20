import { Component } from 'react';
import { connect } from 'react-redux';
import {
	selectField,
	selectCurrentPlayer,
	selectIsGameEnded,
	selectIsDraw,
} from '../../selectors';
import { handlerClickCell } from '../../handlers';
import styles from './field.module.css';
class FieldContainer extends Component {
	render() {
		const { field, currentPlayer, isGameEnded, isDraw, onClickCell } = this.props;

		return (
			<div className="grid grid-rows-3 grid-flow-col gap-4">
				{field.map((elem, index) => (
					<button
						className="text-4xl bg-orange-200 cursor-pointer"
						key={index}
						onClick={() =>
							onClickCell({
								cellIndex: index,
								field,
								currentPlayer,
								isGameEnded,
								isDraw,
							})
						}
					>
						{elem}
					</button>
				))}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	field: selectField(state),
	currentPlayer: selectCurrentPlayer(state),
	isGameEnded: selectIsGameEnded(state),
	isDraw: selectIsDraw(state),
});

const mapDispatchToProps = (dispatch) => ({
	onClickCell: (options) => handlerClickCell({ dispatch, ...options }),
});

export const Field = connect(mapStateToProps, mapDispatchToProps)(FieldContainer);
