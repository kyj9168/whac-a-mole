import React, { useEffect } from 'react';
import Score from 'src/components/organisms/Score';
import { GameInfo, setColumn, setRow, setMoles, setReset } from '../../slice/gameInfo';
import { setPlaying, setFinished } from 'src/slice/gameState';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducer';
import { setScore } from '../../slice/score';

import { setTime } from 'src/slice/time';
import { setRank, User } from 'src/slice/rank';
const Rank = (props: any) => {
	const dispatch = useDispatch();
	const gameInfo = useSelector<RootState, GameInfo>((state) => state.gameInfo);
	const score = useSelector<RootState, number>((state) => state.score.value);
	const rank = useSelector<RootState, User[]>((state) => state.rank.value);

	const startGame = () => {
		dispatch(setMoles());
		dispatch(setPlaying(true));
		dispatch(setFinished(false));
		dispatch(setScore(0));
		dispatch(setTime(60000));
		dispatch(setReset(2000));
	};

	useEffect(() => {
		const nickname = window.prompt('닉네임을 입력하세요.') || 'none';
		dispatch(setRank({ nickname, score }));
	}, []);

	return (
		<>
			<Score />
			<table className="rank_area">
				<tr className="rank_div">
					<th>순위</th>
					<th>닉네임</th>
					<th>점수</th>
				</tr>
				{rank.map(({ nickname, score }, idx) => (
					<tr className="rank_div">
						<td>{`${idx + 1}위`}</td>
						<td>{nickname}</td>
						<td>{score}</td>
					</tr>
				))}
			</table>
			<button onClick={startGame}>다시 시작</button>
		</>
	);
};

export default Rank;
