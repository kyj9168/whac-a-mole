import React from 'react';
import NumberSelect from 'src/components/atoms/NumberSelect';
import ClickBtn from 'src/components/atoms/ClickBtn';

import { GameInfo, setColumn, setRow, setMoles, setMoleValue, setReset } from 'src/slice/gameInfo';
import { setPlaying, setFinished } from 'src/slice/gameState';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store/reducer';
import { setScore } from 'src/slice/score';
import { setTime } from 'src/slice/time';

const Main = (props: any) => {
	const dispatch = useDispatch();
	const gameInfo = useSelector<RootState, GameInfo>((state) => state.gameInfo);

	const row = gameInfo.row;
	const column = gameInfo.column;
	const moleValue = gameInfo.moleValue;

	let moleMax = (row * column) / 2;

	if ((row * column) % 2 === 0) {
		moleMax -= 1;
	} else {
		moleMax = Math.floor(moleMax);
	}

	const startGame = () => {
		dispatch(setMoles());
		dispatch(setPlaying(true));
		dispatch(setFinished(false));
		dispatch(setScore(0));
		dispatch(setTime(60000));
		dispatch(setReset(2000));
	};
	return (
		<>
			<h1>두더지게임</h1>
			<NumberSelect name={'가로 수'} min={2} max={6} numValue={row} setValue={setRow} />
			<NumberSelect name={'세로 수'} min={2} max={6} numValue={column} setValue={setColumn} />
			<NumberSelect name={'두더지 수'} min={1} max={moleMax} numValue={moleValue} setValue={setMoleValue} />

			<ClickBtn click={startGame}>게임 시작</ClickBtn>
		</>
	);
};

export default Main;
