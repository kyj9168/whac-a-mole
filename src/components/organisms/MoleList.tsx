import React, { useEffect } from 'react';
import Mole from '../molecules/Mole';
import { GameInfo, setMoles, setReset } from '../../slice/gameInfo';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducer';
import { randomNumber } from 'src/utils/util';

const MoleList = (props: any) => {
	const dispatch = useDispatch();
	const gameInfo = useSelector<RootState, GameInfo>((state) => state.gameInfo);

	const row = gameInfo.row;
	const column = gameInfo.column;
	const moleValue = gameInfo.moleValue;
	let moles = gameInfo.moles;
	const reset = gameInfo.reset;

	useEffect(() => {
		dispatch(setMoles());
	}, [reset]);

	setTimeout(() => {
		if (!props.stop) {
			if (reset == 700) {
				dispatch(setReset(750));
			} else {
				dispatch(setReset(reset - 50));
			}
		}
	}, reset);
	const random = randomNumber(moles, moleValue);

	let rowPx = 100;
	let columnPx = 100;
	if (row == 4 || column == 4) {
		rowPx = 80;
		columnPx = 80;
	} else if (row == 5 || column == 5) {
		rowPx = 70;
		columnPx = 70;
	} else if (row == 6 || column == 6) {
		rowPx = 60;
		columnPx = 60;
	}
	return (
		<div
			className="mole_list"
			style={{
				gridTemplateRows: `repeat(${row}, ${330 / row}px)`,
				gridTemplateColumns: `repeat(${column}, ${330 / column}px)`,
			}}
		>
			{moles.map((obj, id) => {
				return <Mole inout={random.includes(obj)} key={id} row={row} column={column} />;
			})}
		</div>
	);
};

export default MoleList;
