import React from 'react';
import { useDispatch } from 'react-redux';
import MoleList from 'src/components/organisms/MoleList';
import Score from 'src/components/organisms/Score';
import Timer from 'src/components/organisms/Timer';
import { setPlaying, setFinished } from 'src/slice/gameState';

const Game = (props: any) => {
	const dispatch = useDispatch();

	const endGame = () => {
		dispatch(setPlaying(false));
		dispatch(setFinished(true));
	};

	return (
		<>
			<button className="end-game" onClick={endGame}>
				게임 종료
			</button>
			<Score />
			<Timer />
			<MoleList />
		</>
	);
};

export default Game;
