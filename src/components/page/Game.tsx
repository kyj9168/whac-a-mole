import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MoleList from 'src/components/organisms/MoleList';
import Score from 'src/components/organisms/Score';
import Timer from 'src/components/organisms/Timer';
import ClickBtn from 'src/components/atoms/ClickBtn';
import { GameState, setPlaying, setFinished, setStop } from 'src/slice/gameState';
import { RootState } from 'src/store/reducer';

const Game = (props: any) => {
	const dispatch = useDispatch();
	const gameState = useSelector<RootState, GameState>((state) => state.gameState);

	const endGame = () => {
		dispatch(setPlaying(false));
		dispatch(setFinished(true));
	};
	const stopGame = () => {
		dispatch(setStop());
	};
	return (
		<>
			<ClickBtn class="end-game" click={endGame}>
				게임 종료
			</ClickBtn>
			{gameState.stop && <div className="stop_div"></div>}

			<Score />
			<Timer stop={gameState.stop} />
			<MoleList stop={gameState.stop} />

			<ClickBtn class="stop_btn" click={stopGame}>
				{gameState.stop ? '다시 진행' : '멈추기'}
			</ClickBtn>
		</>
	);
};

export default Game;
