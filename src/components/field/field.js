import { Component } from 'react';
import { connect } from 'react-redux';
import {
	selectField,
	selectCurrentPlayer,
	selectIsGameEnded,
	selectIsDraw,
} from '../../selectors';
import { handlerClickCell } from '../../handlers';
class FieldContainer extends Component {
	render() {
		const { field, currentPlayer, isGameEnded, isDraw, onClickCell } = this.props;

		return (
			<div className="grid grid-cols-[1fr_150px_1fr] gap-4 p-3 grid-rows-[repeat(3,_142px)] m-[0_auto] mb-3 max-w-[490px]">
				{field.map((cell, index) => (
					<button
						className="border border-black text-8xl bg-orange-100 cursor-pointer"
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
						{cell}
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
	onClickCell: (payload) => handlerClickCell({ dispatch, ...payload }),
});

export const Field = connect(mapStateToProps, mapDispatchToProps)(FieldContainer);
