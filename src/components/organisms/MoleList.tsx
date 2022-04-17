import React, { FormEvent, useState, useRef, useEffect } from 'react';
import Mole from '../molecules/Mole';
import { GameInfo, setMoles, setReset } from '../../slice/gameInfo';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducer';
import { generateMoles, randomNumber } from 'src/utils/util';

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
		console.log(row, column, moles, moleValue, reset);
	}, [reset]);

	setTimeout(() => {
		if (reset == 500) {
			dispatch(setReset(550));
		} else {
			dispatch(setReset(reset - 50));
		}
	}, reset);
	const random = randomNumber(moles, moleValue);
	return (
		<div
			className="mole_list"
			style={{
				gridTemplateRows: `repeat(${row}, 100px)`,
				gridTemplateColumns: `repeat(${column}, 100px)`,
			}}
		>
			{moles.map((obj, id) => {
				return <Mole inout={random.includes(obj)} key={id} row={row} column={column} />;
			})}
		</div>
	);
};

export default MoleList;
